import { ArrowRight, Download, MessageCircle } from "lucide-react";
import heroDeveloperDesktop from "../assets/images/hero-developer-1000.webp";
import heroDeveloperMobile from "../assets/images/hero-developer-600.webp";
import { profile } from "../data/profile";

const stats = [
  { value: "50+", label: "Websites Worked On" },
  { value: "30+", label: "Clients & Brands Supported" },
  { value: "2+", label: "Years of Experience" },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <p className="eyebrow">{profile.title}</p>
          <h1>{profile.heroHeadline}</h1>
          <p className="hero-intro">
            I build and improve WordPress, WooCommerce, Shopify, and frontend websites for businesses, e-commerce brands, and agencies.
          </p>

          <div className="hero-actions" aria-label="Portfolio actions">
            <a className="btn btn-primary" href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              WhatsApp Me
            </a>
            <a className="btn btn-secondary" href="#projects">
              View My Work
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn-text" href={profile.cvPath} download="CV-Omar-Yousef.pdf">
              <Download aria-hidden="true" />
              Download CV
            </a>
          </div>

          <dl className="hero-stats">
            {stats.map((item) => (
              <div key={item.label}>
                <dt>{item.value}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-illustration">
          <picture>
            <source media="(max-width: 767px)" srcSet={heroDeveloperMobile} />
            <img
              src={heroDeveloperDesktop}
              srcSet={`${heroDeveloperMobile} 600w, ${heroDeveloperDesktop} 1000w`}
              sizes="(max-width: 767px) 290px, (max-width: 1023px) 380px, 540px"
              width="1000"
              height="1000"
              alt="3D illustration of a frontend and WordPress developer working on a laptop"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
