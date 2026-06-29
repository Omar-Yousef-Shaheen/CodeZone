import SectionTitle from "./SectionTitle";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="A focused toolkit for modern static and CMS websites."
          description="Grouped directly from the CV so the portfolio stays honest, scannable, and easy to update."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="panel p-6">
              <h3 className="text-2xl font-bold text-navy">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
