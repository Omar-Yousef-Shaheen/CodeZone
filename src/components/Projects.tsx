import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { projectGroups } from "../data/projects";

const projectSections = [
  {
    eyebrow: "eCommerce Projects",
    title: "Stores built for browsing, trust, and sales",
    description: "Shopify and WooCommerce storefronts with product-led layouts, clear journeys, and responsive shopping experiences.",
    projects: projectGroups.ecommerce,
  },
  {
    eyebrow: "Portfolio Websites",
    title: "Corporate, agency, and portfolio websites",
    description: "Presentation websites for companies, studios, academies, and creative brands that need polished digital credibility.",
    projects: projectGroups.portfolio,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-band py-12 md:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Selected websites built for real brands"
          description="A focused selection of WordPress, Shopify, WooCommerce, and portfolio websites across different industries."
        />

        <div className="space-y-12 md:space-y-16">
          {projectSections.map((section) => (
            <div key={section.eyebrow} className="project-group">
              <div className="mb-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="eyebrow mb-3 w-fit">{section.eyebrow}</p>
                  <h3 className="max-w-2xl text-2xl font-semibold leading-tight text-navy md:text-[32px]">{section.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-ink md:text-base">{section.description}</p>
                </div>
                <p className="project-count">{section.projects.length} projects</p>
              </div>

              <Carousel
                ariaLabel={section.eyebrow}
                controlsClassName="project-carousel-controls"
                slideClassName="basis-full sm:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-14px)]"
              >
                {section.projects.map((project) => (
                  <ProjectCard key={project.title} project={project} compact={!project.featured} />
                ))}
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
