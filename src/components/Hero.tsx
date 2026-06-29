import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { SkillIcon } from "./Icon";
import { projects } from "../data/projects";
import { profile } from "../data/profile";

const servicePills = [
  { label: "WordPress", icon: "wordpress" },
  { label: "Shopify", icon: "shopify" },
  // { label: "WooCommerce", icon: "woocommerce" },
];

const stats = [
  { value: "30+", label: "Websites launched" },
  { value: "20+", label: "Clients supported" },
  { value: "2+", label: "Years building" },
];

export default function Hero() {
  const featured = projects.slice(0, 3);

  return (
    <section id="home" className="hero-section relative isolate overflow-hidden pt-14 md:pt-10">
      <div className="mx-auto grid min-h-[720px] max-w-[1240px] items-center gap-12 px-4 pb-14 sm:px-6 md:grid-cols-[0.46fr_0.54fr] md:px-8">
        <div className="relative z-10 text-center md:text-left">
          <p className="eyebrow mx-auto mb-5 w-fit md:mx-0">{profile.title}</p>
          <h1 className="mx-auto max-w-3xl text-[40px] font-semibold leading-[1.04] text-navy sm:text-6xl md:mx-0 lg:text-[52px]">
            <span className="text-gradient">Premium</span> websites that work hard.
          </h1> 
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-8 text-ink md:mx-0 md:text-base">
            I design and build responsive WordPress, Shopify, and WooCommerce websites for brands that need a sharper online presence.
          </p>

          <div className="mx-auto mt-7 flex max-w-[calc(100vw-32px)] flex-wrap justify-center gap-3 md:mx-0 md:max-w-none md:justify-start">
            {servicePills.map((pill) => (
              <span key={pill.label} className="hero-pill">
                <SkillIcon name={pill.icon} className="size-4 text-royal" />
                {pill.label}
              </span>
            ))}
          </div>

          <dl className="mx-auto mt-9 grid max-w-xl grid-cols-3 gap-3 md:mx-0">
            {stats.map((item) => (
              <div key={item.label} className="stat-card">
                <dt className="text-2xl font-semibold leading-none text-navy md:text-[30px]">{item.value}</dt>
                <dd className="mt-2 text-[11px] font-semibold leading-5 text-muted md:text-xs">{item.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a className="btn btn-primary" href="#projects">
              View My Work
              <ArrowRight className="size-4" />
            </a>
            <a className="btn btn-ghost" href="#contact">
              <MessageCircle className="size-4" />
              Contact Me
              <ArrowRight className="size-4" />
            </a>
          </div>

          <article className="mobile-work-peek">
            <img src={featured[0].image} alt={`${featured[0].title} website mockup`} />
            <div>
              <span>{featured[0].category}</span>
              <strong>{featured[0].title}</strong>
            </div>
          </article>
        </div>

        <div className="relative mx-auto w-full max-w-[720px]">
          <div className="work-showcase" aria-label="Featured website work preview">
            <div className="showcase-toolbar">
              <span />
              <span />
              <span />
              <strong>CodezWeb / selected builds</strong>
            </div>
            <div className="showcase-grid">
              <article className="showcase-main">
                <img src={featured[0].image} alt={`${featured[0].title} website mockup`} />
                <div>
                  <span>{featured[0].category}</span>
                  <h2>{featured[0].title}</h2>
                </div>
              </article>
              <div className="showcase-side">
                {featured.slice(1).map((project) => (
                  <article key={project.title}>
                    <img src={project.image} alt={`${project.title} website mockup`} />
                    <div>
                      <span>{project.category}</span>
                      <h3>{project.title}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
