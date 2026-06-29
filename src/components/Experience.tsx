import SectionTitle from "./SectionTitle";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section bg-frost">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8">
        <SectionTitle
          eyebrow="Experience"
          title="Website delivery, optimization, and client-focused improvements."
          description="The timeline preserves the CV's employers, dates, and responsibilities without adding unsupported claims."
        />
        <div className="mx-auto max-w-4xl">
          {experience.map((item) => (
            <article key={`${item.company}-${item.date}`} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="panel p-6 md:p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-navy">{item.company}</h3>
                    <p className="mt-1 font-medium text-royal">{item.title}</p>
                  </div>
                  <p className="rounded-lg border border-line bg-white px-3 py-1 text-sm text-muted">
                    {item.date}
                  </p>
                </div>
                <ul className="mt-5 space-y-3 text-ink">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-royal" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
