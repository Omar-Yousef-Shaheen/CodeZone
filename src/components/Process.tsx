import SectionTitle from "./SectionTitle";
import { ProcessIcon } from "./Icon";
import { processSteps } from "../data/process";

export default function Process() {
  return (
    <section id="process" className="section py-12 md:py-16">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 md:px-8">
        <SectionTitle
          eyebrow="Process"
          title="A clear path from brief to launch"
          description="A practical workflow for shaping the right structure, building clean pages, and preparing the site for real users."
        />
        <div className="grid gap-5 md:grid-cols-4 md:gap-6">
          {processSteps.map((step) => (
            <div key={step.number} className="relative">
              <article className="process-card h-full">
                <div className="mb-6 flex items-start gap-4">
                  <span className="icon-orb size-12">
                    <ProcessIcon name={step.icon} className="size-5" />
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-muted">{step.number}</span>
                    <h3 className="mt-1 text-lg font-bold text-navy">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm leading-7 text-ink">{step.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
