import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const filters = [
  "All",
  "WordPress / WooCommerce",
  "Shopify",
  "Full Build",
  "Development & Improvements",
] as const;

type ProjectFilter = (typeof filters)[number];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const visibleTitles = useMemo(() => {
    if (activeFilter === "All") return new Set(projects.map((project) => project.title));
    return new Set(
      projects
        .filter((project) => project.platform === activeFilter || project.role === activeFilter)
        .map((project) => project.title),
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionTitle
          eyebrow="Projects"
          title="Websites built and improved across different industries."
          description="Browse all 54 projects by platform or role. Every project remains available here on the same page."
        />

        <div className="project-toolbar">
          <div className="project-filters" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="filter-button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className="project-result-count" aria-live="polite">
            Showing {visibleTitles.size} {visibleTitles.size === 1 ? "project" : "projects"}
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.title} hidden={!visibleTitles.has(project.title)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        {visibleTitles.size === 0 ? <p className="empty-state">No projects match this filter. Try another category.</p> : null}
      </div>
    </section>
  );
}
