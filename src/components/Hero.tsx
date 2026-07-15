import { ArrowRight, Check, Download, MessageCircle } from "lucide-react";
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

        <div className="browser-visual" aria-label="Responsive website development interface illustration" role="img">
          <div className="browser-bar">
            <span className="browser-dots" aria-hidden="true"><i /><i /><i /></span>
            <span className="browser-address">omaryousef.dev / build</span>
            <span className="browser-status"><i /> Live preview</span>
          </div>
          <div className="browser-body">
            <aside className="visual-sidebar" aria-hidden="true">
              <span className="visual-logo">OY</span>
              <span className="visual-nav active" />
              <span className="visual-nav" />
              <span className="visual-nav" />
            </aside>
            <div className="visual-workspace">
              <div className="visual-heading-row">
                <div>
                  <span className="visual-kicker">CURRENT BUILD</span>
                  <strong>Commerce interface</strong>
                </div>
                <span className="visual-responsive">320 <i /> 768 <i /> 1440</span>
              </div>
              <div className="visual-canvas">
                <div className="visual-preview">
                  <span className="preview-tag">Responsive storefront</span>
                  <strong>Clear structure.<br />Fast interaction.</strong>
                  <div className="preview-buttons"><i /><i /></div>
                  <div className="preview-cards"><i /><i /><i /></div>
                </div>
                <div className="visual-code" aria-label="Example CSS for a responsive product grid">
                  <span><b>.product-grid</b> {'{'}</span>
                  <span>&nbsp;&nbsp;display: grid;</span>
                  <span>&nbsp;&nbsp;gap: 1.5rem;</span>
                  <span>&nbsp;&nbsp;grid-template-columns:</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;repeat(auto-fit, minmax(16rem, 1fr));</span>
                  <span>{'}'}</span>
                </div>
              </div>
              <div className="visual-metrics">
                <span><Check aria-hidden="true" /> Responsive layout</span>
                <span><Check aria-hidden="true" /> Accessible controls</span>
                <span><Check aria-hidden="true" /> Optimized assets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
