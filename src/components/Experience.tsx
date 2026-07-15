import { BriefcaseBusiness } from "lucide-react";
import { experience } from "../data/experience";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="section section-tint">
      <div className="shell">
        <SectionTitle
          eyebrow="Experience"
          title="Hands-on website work across teams and client projects."
          description="A concise view of my WordPress, WooCommerce, Shopify, responsive implementation, and website improvement experience."
        />
        <div className="experience-grid">
          {experience.map((item) => (
            <article key={`${item.company}-${item.date}`} className="experience-card">
              <div className="experience-topline">
                <span className="experience-icon"><BriefcaseBusiness aria-hidden="true" /></span>
                <span className="experience-date">{item.date}</span>
              </div>
              <h3>{item.company}</h3>
              <p className="experience-title">{item.title}</p>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
