import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { ServiceIcon } from "./Icon";
import { services } from "../data/services";

const iconColors: Record<string, string> = {
  wordpress: "text-[#00b8c4]",
  store: "text-[#22c55e]",
  code: "text-[#101828]",
};

export default function Services() {
  return (
    <section id="services" className="section py-12 md:py-16">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 md:px-8">
        <SectionTitle
          eyebrow="Services"
          title="Build, improve, and launch your website"
          description="Focused services for business websites, online stores, and custom front-end pages."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <span className="icon-orb mb-6">
                <ServiceIcon name={service.icon} className={`size-7 ${iconColors[service.icon] ?? "text-[#101828]"}`} />
              </span>
              <h3 className="text-xl font-bold text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink">{service.description}</p>
              <a className="text-link mt-6" href="#contact">
                Learn More
                <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
