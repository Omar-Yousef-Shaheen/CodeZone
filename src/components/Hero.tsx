import { ArrowDown, Download, MessageCircle } from "lucide-react";

import sevenskeImage from "../assets/images/hero-project-wall/sevenske-live.jpg";
import zadeenImage from "../assets/images/hero-project-wall/zadeen-live.jpg";
import homersImage from "../assets/images/hero-project-wall/homers-eg-live.jpg";
import casaTierraImage from "../assets/images/hero-project-wall/casatierra-home-live.jpg";
import piercingJasmineImage from "../assets/images/hero-project-wall/piercingjasmine-live.jpg";
import harmonyImage from "../assets/images/hero-project-wall/harmonyfurnishinghome-live.jpg";
import elghonemycoffeeImage from "../assets/images/hero-project-wall/elghonemycoffee-live.jpg";
import palmerasHotelImage from "../assets/images/hero-project-wall/palmeras-hotel-live.jpg";
import explorecarsrentalImage from "../assets/images/hero-project-wall/explorecarsrental-live.jpg";

import { profile } from "../data/profile";
import { useI18n } from "../i18n/useI18n";
import { handleSectionNavigation } from "../utils/sectionNavigation";

const projectWall = [
  { src: sevenskeImage, width: 700, height: 1847 },
  { src: zadeenImage, width: 700, height: 1847 },
  { src: homersImage, width: 700, height: 1847 },
  { src: casaTierraImage, width: 700, height: 1847 },
  { src: piercingJasmineImage, width: 700, height: 1453 },
  { src: harmonyImage, width: 700, height: 1847 },
  { src: elghonemycoffeeImage, width: 700, height: 1847 },
  { src: palmerasHotelImage, width: 700, height: 1847 },
  { src: explorecarsrentalImage, width: 700, height: 1847 },
] as const;

const renderProjectTrack = (duplicate = false) => (
  <div
    className="studio-hero-track"
    aria-hidden={duplicate ? "true" : undefined}
  >
    {projectWall.map((project, index) => (
      <figure key={project.src} className="studio-hero-panel">
        <img
          src={project.src}
          width={project.width}
          height={project.height}
          alt=""
          aria-hidden="true"
          decoding="async"
          loading={!duplicate && index < 6 ? "eager" : "lazy"}
          fetchPriority={!duplicate && index < 2 ? "high" : "low"}
        />
      </figure>
    ))}
  </div>
);

export default function Hero() {
  const { dictionary } = useI18n();
  const hero = dictionary.hero;

  return (
    <section id="home" className="studio-hero">
      <div className="studio-hero-wall" aria-hidden="true">
        <div className="studio-hero-marquee">
          {renderProjectTrack()}
          {renderProjectTrack(true)}
        </div>
      </div>

      <div className="studio-hero-overlay" aria-hidden="true" />

      <div className="studio-hero-inner shell">
        <div className="studio-hero-content">
          <p className="studio-hero-eyebrow">{hero.eyebrow}</p>

          <h1 className="studio-hero-heading">
            <span>{hero.heading.leading}</span>{" "}
            <span className="studio-hero-emphasis">
              {hero.heading.emphasis}
            </span>
          </h1>

          <p className="studio-hero-description">
            {hero.description}
          </p>

          <div
            className="studio-hero-actions"
            aria-label={hero.actionsLabel}
          >
            <a
              className="studio-hero-button studio-hero-primary"
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={hero.primaryCtaAriaLabel}
            >
              <MessageCircle aria-hidden="true" />
              {hero.primaryCta}
            </a>

            <a
              className="studio-hero-button studio-hero-secondary"
              href="#projects"
              aria-label={hero.secondaryCtaAriaLabel}
              onClick={handleSectionNavigation}
            >
              {hero.secondaryCta}
              <ArrowDown aria-hidden="true" />
            </a>
          </div>

          <a
            className="studio-hero-cv"
            href={profile.cvPath}
            download="CV-Omar-Yousef.pdf"
            aria-label={hero.cvLinkAriaLabel}
          >
            <Download aria-hidden="true" />
            {hero.cvLink}
          </a>
        </div>

        <dl
          className="studio-hero-metrics"
          aria-label={hero.metricsLabel}
        >
          {hero.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.value}</dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
