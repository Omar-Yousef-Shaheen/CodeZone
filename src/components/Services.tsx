import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { ServiceIcon } from "./Icon";
import SectionTitle from "./SectionTitle";

export default function Services() {
  return (
    <section id="services" className="section section-tint">
      <div className="shell">
        <SectionTitle
          eyebrow="Services"
          title="Focused website services from build to improvement."
          description="Practical delivery for business websites, online stores, responsive interfaces, and existing sites that need attention."
        />
        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service.title} className={`service-card service-card-${index + 1}`}>
              <span className="service-number">0{index + 1}</span>
              <span className="service-icon"><ServiceIcon name={service.icon} /></span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a href="#contact" className="text-link">
                Discuss this service <ArrowRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
