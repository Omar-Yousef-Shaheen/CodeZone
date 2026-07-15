import { Gauge, LayoutTemplate, MonitorSmartphone, PanelsTopLeft } from "lucide-react";
import { profile } from "../data/profile";
import { coreSkills } from "../data/skills";
import { SkillIcon } from "./Icon";

const strengths = [
  { label: "Responsive Builds", icon: MonitorSmartphone },
  { label: "CMS Expertise", icon: PanelsTopLeft },
  { label: "Performance Minded", icon: Gauge },
  { label: "UI Improvements", icon: LayoutTemplate },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell about-grid">
        <div className="about-copy">
          <p className="eyebrow">About Me</p>
          <h2>Practical development for polished, dependable websites.</h2>
          <p>{profile.about}</p>
          <div className="strength-grid">
            {strengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <div key={strength.label} className="strength-item">
                  <span><Icon aria-hidden="true" /></span>
                  <strong>{strength.label}</strong>
                </div>
              );
            })}
          </div>
        </div>

        <article className="skills-panel" aria-labelledby="skills-title">
          <div className="skills-heading">
            <div>
              <p className="mini-label">Core toolkit</p>
              <h3 id="skills-title">Skills</h3>
            </div>
            <span>{coreSkills.length} focused skills</span>
          </div>
          <div className="skill-list">
            {coreSkills.map((skill) => (
              <div key={skill.name} className="skill-row">
                <div className="skill-label-row">
                  <span className="skill-name"><SkillIcon name={skill.icon} />{skill.name}</span>
                  <span>{skill.label}</span>
                </div>
                <div
                  className="skill-track"
                  role="progressbar"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={skill.level}
                >
                  <span style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
