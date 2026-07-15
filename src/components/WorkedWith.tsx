import { companies } from "../data/companies";

export default function WorkedWith() {
  return (
    <section className="worked-with" aria-labelledby="worked-with-title">
      <div className="shell">
        <div className="worked-with-heading">
          <p className="mini-label">Professional experience</p>
          <h2 id="worked-with-title">Worked With</h2>
        </div>
        <div className="logo-grid">
          {companies.map((company) => (
            <a
              key={company.name}
              className="company-logo"
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${company.name} website`}
            >
              <img src={company.logo} alt={company.alt} loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
