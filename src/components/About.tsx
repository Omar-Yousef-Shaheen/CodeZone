import { Code2, Gauge, Search, Sparkles } from "lucide-react";
import { profile } from "../data/profile";
import { coreSkills } from "../data/skills";
import { SkillIcon } from "./Icon";

const features = [
  { label: "Clean Code", icon: Code2 },
  { label: "Performance Focused", icon: Gauge },
  { label: "SEO Optimized", icon: Search },
  { label: "Pixel Perfect", icon: Sparkles },
];

const skillColors: Record<string, string> = {
  wordpress: "text-[#21759b]",
  html: "text-[#f97316]",
  css: "text-[#00b8c4]",
  javascript: "text-[#facc15]",
  shopify: "text-[#22c55e]",
  woocommerce: "text-[#a855f7]",
  tailwind: "text-[#22d3ee]",
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="glass-panel mx-auto grid max-w-[1180px] gap-10 rounded-lg px-5 py-7 sm:px-7 md:grid-cols-[0.88fr_1.12fr] md:p-9 lg:p-10">
        <div>
          <p className="eyebrow mb-5 w-fit">About Me</p>
          <h2 className="max-w-xl text-[28px] font-medium leading-tight text-navy sm:text-4xl md:text-[40px]">
            A practical web partner for <span className="text-gradient">brands that need momentum</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-ink md:text-[15px]">
            {profile.about}
          </p>

          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.label} className="flex items-center gap-2 text-xs font-semibold text-ink">
                  <span className="grid size-8 shrink-0 place-items-center rounded-md text-sky">
                    <Icon className="size-5" />
                  </span>
                  {feature.label}
                </div>
              );
            })}
          </div>
        </div>

        <article>
          <h3 className="mb-6 text-2xl font-bold text-navy">Skills</h3>
          <div className="space-y-5">
            {coreSkills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <SkillIcon name={skill.icon} className={`size-5 ${skillColors[skill.icon] ?? "text-sky"}`} />
                    <span className="text-sm font-bold text-navy">{skill.name}</span>
                  </div>
                  <span className="text-xs font-bold text-muted">{skill.label}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-400/15">
                  <div className="h-full rounded-full bg-gradient-to-r from-royal to-sky" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
