import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
} from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const filters = [
  "All",
  "WordPress/WooCommerce",
  "Shopify",
  "Portfolio Websites",
  "Full Build",
  "Development & Improvements",
] as const;

type ProjectFilter = (typeof filters)[number];

type DragState = {
  pointerId: number;
  startX: number;
  startY: number;
  startScrollLeft: number;
  startPage: number;
  axis: "pending" | "horizontal" | "vertical";
};

const getProjectsPerPage = () => {
  if (typeof window === "undefined") return 3;
  if (window.matchMedia("(min-width: 1024px)").matches) return 3;
  if (window.matchMedia("(min-width: 768px)").matches) return 2;
  return 1;
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [projectsPerPage, setProjectsPerPage] = useState(getProjectsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const filterRefs = useRef<Partial<Record<ProjectFilter, HTMLButtonElement | null>>>({});
  const dragStateRef = useRef<DragState | null>(null);
  const suppressClickRef = useRef(false);

  const filteredProjects = useMemo(() => {
    switch (activeFilter) {
      case "WordPress/WooCommerce":
        return projects.filter((project) => project.category === "wordpress-woocommerce");
      case "Shopify":
        return projects.filter((project) => project.category === "shopify");
      case "Portfolio Websites":
        return projects.filter((project) => project.category === "portfolio");
      case "Full Build":
        return projects.filter((project) => project.role === "Full Build");
      case "Development & Improvements":
        return projects.filter((project) => project.category === "development-improvements");
      default:
        return projects;
    }
  }, [activeFilter]);

  const projectPages = useMemo(
    () =>
      Array.from({ length: Math.ceil(filteredProjects.length / projectsPerPage) }, (_, pageIndex) =>
        filteredProjects.slice(pageIndex * projectsPerPage, (pageIndex + 1) * projectsPerPage),
      ),
    [filteredProjects, projectsPerPage],
  );

  const scrollToPage = useCallback((pageIndex: number, behavior?: ScrollBehavior) => {
    const targetPage = pageRefs.current[pageIndex];
    if (!targetPage) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    targetPage.scrollIntoView({
      behavior: behavior ?? (prefersReducedMotion ? "auto" : "smooth"),
      block: "nearest",
      inline: "start",
    });
    setCurrentPage(pageIndex);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const tabletQuery = window.matchMedia("(min-width: 768px)");
    const updateProjectsPerPage = () => setProjectsPerPage(getProjectsPerPage());

    desktopQuery.addEventListener("change", updateProjectsPerPage);
    tabletQuery.addEventListener("change", updateProjectsPerPage);
    return () => {
      desktopQuery.removeEventListener("change", updateProjectsPerPage);
      tabletQuery.removeEventListener("change", updateProjectsPerPage);
    };
  }, []);

  useEffect(() => {
    pageRefs.current.length = projectPages.length;
    setCurrentPage(0);
    const frame = window.requestAnimationFrame(() => scrollToPage(0, "auto"));
    return () => window.cancelAnimationFrame(frame);
  }, [activeFilter, projectsPerPage, projectPages.length, scrollToPage]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || projectPages.length < 2) return;

    const visibility = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visibility.set(entry.target, entry.intersectionRatio));

        let mostVisiblePage = 0;
        let largestRatio = -1;
        pageRefs.current.forEach((page, pageIndex) => {
          if (!page) return;
          const ratio = visibility.get(page) ?? 0;
          if (ratio > largestRatio) {
            largestRatio = ratio;
            mostVisiblePage = pageIndex;
          }
        });
        setCurrentPage(mostVisiblePage);
      },
      { root: track, threshold: [0.25, 0.5, 0.75, 0.9] },
    );

    pageRefs.current.forEach((page) => {
      if (page) observer.observe(page);
    });
    return () => observer.disconnect();
  }, [activeFilter, projectsPerPage, projectPages.length]);

  const handleCarouselKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || projectPages.length < 2) return;

    const isRtl = window.getComputedStyle(event.currentTarget).direction === "rtl";
    let targetPage: number | null = null;

    if (event.key === "ArrowRight") targetPage = currentPage + (isRtl ? -1 : 1);
    if (event.key === "ArrowLeft") targetPage = currentPage + (isRtl ? 1 : -1);
    if (event.key === "Home") targetPage = 0;
    if (event.key === "End") targetPage = projectPages.length - 1;

    if (targetPage === null) return;
    event.preventDefault();
    const behavior = event.key === "Home" || event.key === "End" ? "auto" : undefined;
    scrollToPage(Math.max(0, Math.min(targetPage, projectPages.length - 1)), behavior);
  };

  const handleFilterChange = (filter: ProjectFilter) => {
    setCurrentPage(0);
    setActiveFilter(filter);

    if (!window.matchMedia("(max-width: 767px)").matches) return;
    window.requestAnimationFrame(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      filterRefs.current[filter]?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "center",
      });
    });
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || projectPages.length < 2) return;
    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startScrollLeft: event.currentTarget.scrollLeft,
      startPage: currentPage,
      axis: "pending",
    };
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;
    if (!dragState || dragState.pointerId !== event.pointerId || dragState.axis === "vertical") return;

    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;
    if (dragState.axis === "pending") {
      if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 8) return;
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        dragState.axis = "vertical";
        return;
      }
      dragState.axis = "horizontal";
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.classList.add("is-dragging");
    }

    event.preventDefault();
    const isRtl = window.getComputedStyle(event.currentTarget).direction === "rtl";
    event.currentTarget.scrollLeft = dragState.startScrollLeft - deltaX * (isRtl ? -1 : 1);
  };

  const finishPointerDrag = (event: ReactPointerEvent<HTMLDivElement>, cancelled = false) => {
    const dragState = dragStateRef.current;
    if (!dragState || dragState.pointerId !== event.pointerId) return;

    event.currentTarget.classList.remove("is-dragging");
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (dragState.axis === "horizontal") {
      const deltaX = event.clientX - dragState.startX;
      const isRtl = window.getComputedStyle(event.currentTarget).direction === "rtl";
      const movedTowardNext = isRtl ? deltaX > 0 : deltaX < 0;
      const pageDelta = cancelled || Math.abs(deltaX) < 32 ? 0 : movedTowardNext ? 1 : -1;
      const targetPage = Math.max(0, Math.min(dragState.startPage + pageDelta, projectPages.length - 1));
      suppressClickRef.current = true;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
      scrollToPage(targetPage);
    }

    dragStateRef.current = null;
  };

  const handleClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) return;
    event.preventDefault();
    event.stopPropagation();
  };

  const visibleStart = filteredProjects.length === 0 ? 0 : currentPage * projectsPerPage + 1;
  const visibleEnd = Math.min((currentPage + 1) * projectsPerPage, filteredProjects.length);
  const isAtStart = currentPage === 0;
  const isAtEnd = currentPage >= projectPages.length - 1;
  const counterText = projectsPerPage === 1 || visibleStart === visibleEnd
    ? `${visibleStart} of ${filteredProjects.length} projects`
    : `${visibleStart}\u2013${visibleEnd} of ${filteredProjects.length} projects`;

  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionTitle
          eyebrow="Projects"
          title="Websites built and improved across different industries."
          description={`Browse all ${projects.length} projects by platform or role. Every project remains available here on the same page.`}
        />

        <div className="project-toolbar">
          <div className="project-filters" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                ref={(element) => {
                  filterRefs.current[filter] = element;
                }}
                type="button"
                className="filter-button"
                aria-pressed={activeFilter === filter}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="project-carousel-status">
            <p className="project-result-count" aria-live="polite" aria-atomic="true">
              {counterText}
            </p>
            <div className="project-carousel-controls" aria-label="Projects carousel controls">
              <button
                type="button"
                className="project-carousel-button"
                aria-label="Show previous projects"
                aria-controls="project-carousel-track"
                disabled={isAtStart}
                onClick={() => scrollToPage(currentPage - 1)}
              >
                <ChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="project-carousel-button"
                aria-label="Show next projects"
                aria-controls="project-carousel-track"
                disabled={isAtEnd}
                onClick={() => scrollToPage(currentPage + 1)}
              >
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="project-carousel">
            <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
              {activeFilter} filter selected. {filteredProjects.length} projects. Showing {counterText}.
            </p>
            <div
              id="project-carousel-track"
              ref={trackRef}
              className="project-carousel-track"
              role="region"
              aria-roledescription="carousel"
              aria-label={`${activeFilter} projects. Use the left and right arrow keys to navigate.`}
              tabIndex={0}
              onKeyDown={handleCarouselKeyDown}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={(event) => finishPointerDrag(event)}
              onPointerCancel={(event) => finishPointerDrag(event, true)}
              onClickCapture={handleClickCapture}
            >
              {projectPages.map((page, pageIndex) => {
                const pageStart = pageIndex * projectsPerPage + 1;
                const pageEnd = Math.min((pageIndex + 1) * projectsPerPage, filteredProjects.length);

                return (
                  <div
                    key={`${activeFilter}-${pageIndex}`}
                    ref={(element) => {
                      pageRefs.current[pageIndex] = element;
                    }}
                    className="project-carousel-page"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={pageStart === pageEnd
                      ? `Project ${pageStart} of ${filteredProjects.length}`
                      : `Projects ${pageStart}\u2013${pageEnd} of ${filteredProjects.length}`}
                    aria-hidden={pageIndex !== currentPage}
                    inert={pageIndex !== currentPage}
                  >
                    {page.map((project) => (
                      <div className="project-carousel-item" key={project.title}>
                        <ProjectCard project={project} />
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p className="empty-state">No projects match this filter. Try another category.</p>
        )}
      </div>
    </section>
  );
}
