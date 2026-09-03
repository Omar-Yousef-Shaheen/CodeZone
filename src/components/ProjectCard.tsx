import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { useI18n } from "../i18n/useI18n";
import { PlatformIcon } from "./Icon";

export default function ProjectCard({ project }: { project: Project }) {
  const { locale } = useI18n();
  const title = project.localizedTitle?.[locale] ?? project.title;
  const description = project.localizedDescription?.[locale] ?? project.description;
  const platformLabel = project.localizedPlatformLabel?.[locale] ?? (
    project.platform === "Shopify"
      ? "Shopify"
      : project.siteType === "Portfolio Website"
        ? "WordPress"
        : "WordPress / WooCommerce"
  );

  return (
    <article className="project-card">
      <div className="project-thumb">
        <img
          src={project.image}
          alt={`${title} website homepage preview`}
          width="640"
          height="400"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-content">
        <div className="project-badges">
          <span className="platform-badge"><PlatformIcon platform={project.platform} />{platformLabel}</span>
          {project.role ? <span className="role-badge">{project.role}</span> : null}
        </div>
        <h3>{title}</h3>
        {project.source ? <p className="project-source">{project.source}</p> : null}
        <p className="project-description">{description}</p>
        <a
          className="project-cta"
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${title} website (opens in a new tab)`}
        >
          Visit Website
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
