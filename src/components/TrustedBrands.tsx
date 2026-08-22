import { companies } from "../data/companies";
import { useI18n } from "../i18n/useI18n";

export default function TrustedBrands() {
  const { dictionary } = useI18n();

  const renderLogoTrack = (duplicate = false) => (
    <ul
      className="trusted-brands-logo-group"
      aria-label={duplicate ? undefined : dictionary.trustedBrands.logoListLabel}
      aria-hidden={duplicate || undefined}
    >
      {companies.map((company) => {
        const logoSlug = company.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

        return (
          <li
            key={company.name}
            className={`trusted-brand-item trusted-brand-item-${logoSlug}`}
          >
            <img
              className={`trusted-brand-logo trusted-brand-logo-${logoSlug}`}
              src={company.logo}
              alt={duplicate ? "" : company.alt}
              width="180"
              height="56"
              loading="lazy"
              decoding="async"
            />
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className="trusted-brands" aria-label={dictionary.trustedBrands.logoListLabel}>
      <div className="trusted-brands-marquee">
        <div className="trusted-brands-track">
          {renderLogoTrack()}
          {renderLogoTrack(true)}
        </div>
      </div>
    </section>
  );
}
