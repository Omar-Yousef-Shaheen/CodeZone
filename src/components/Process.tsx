import { processSteps } from "../data/process";
import { ProcessIcon } from "./Icon";
import SectionTitle from "./SectionTitle";

export default function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="shell">
        <SectionTitle
          eyebrow="Process"
          title="A clear workflow from first conversation to launch."
          description="A practical four-stage process that works for direct clients, e-commerce brands, and agency collaboration."
        />
        <ol className="process-grid">
          {processSteps.map((step) => (
            <li key={step.number} className="process-card">
              <span className="process-number">{step.number}</span>
              <span className="process-icon"><ProcessIcon name={step.icon} /></span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
