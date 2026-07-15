import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { PlatformIcon } from "./Icon";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-thumb">
        <img
          src={project.image}
          alt={`${project.title} website homepage preview`}
          width="640"
          height="400"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-content">
        <div className="project-badges">
          <span className="platform-badge"><PlatformIcon platform={project.platform} />{project.platform}</span>
          <span className="role-badge">{project.role}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-source">{project.source}</p>
        <p className="project-description">{project.description}</p>
        <a
          className="project-cta"
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} website (opens in a new tab)`}
        >
          Visit Website
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
