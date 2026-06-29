import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { CategoryIcon } from "./Icon";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className={`project-card group flex h-full flex-col overflow-hidden ${project.featured ? "project-card-featured" : ""}`}>
      <div className="project-thumb">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} website mockup`}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="project-placeholder">
            <span className="flex items-center gap-1.5">
              <CategoryIcon category={project.category} className="size-3" />
              {project.category}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <span className="category-badge mb-3 w-fit">
          <CategoryIcon category={project.category} className="size-3" />
          {project.category}
        </span>
        <h3 className="text-xl font-bold leading-tight text-navy">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-ink">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, compact ? 3 : 4).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
        {project.liveDemoUrl ? (
          <a className="project-cta mt-6" href={project.liveDemoUrl} target="_blank" rel="noreferrer">
            Visit website
            <ArrowUpRight className="size-4" />
          </a>
        ) : (
          <span className="project-cta mt-6">
            View Project
            <ArrowUpRight className="size-4" />
          </span>
        )}
      </div>
    </article>
  );
}
