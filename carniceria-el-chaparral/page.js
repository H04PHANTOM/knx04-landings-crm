import { site } from './site-data';
import './globals.css';

const linkFor = (url, basePath = '') => {
  if (!url) return null;
  return url.startsWith('http') ? url : `${basePath}${url}`;
};

export const metadata = {
  title: `${site.name} · ${site.category}`,
  description: site.intro,
};

export default function Page() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
  const phoneHref = site.phone ? `tel:${site.phone}` : null;
  const emailHref = site.email ? `mailto:${site.email}` : null;
  const websiteHref = linkFor(site.website, site.basePath);
  const brandHref = `${site.basePath}/knx04-mark.svg`;
  return (
    <main className="page" style={{ '--accent': site.accent }}>
      <div className="noise" aria-hidden="true" />
      <header className="topbar shell">
        <a className="brand" href="#inicio" aria-label="KNX04 inicio">
          <img src={brandHref} alt="KNX04" width="36" height="36" />
          <span>KNX04 <small>PROPUESTA DIGITAL</small></span>
        </a>
        <span className="status-dot">PREVIEW</span>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">{site.category}</p>
          <h1>{site.tag}</h1>
          <p className="lead">{site.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#servicios">Ver propuesta</a>
            {phoneHref ? <a className="button button-ghost" href={phoneHref}>Llamar</a> : <a className="button button-ghost" href="#contacto">Consultar</a>}
          </div>
          <p className="microcopy">{site.demoLabel}</p>
        </div>
        <div className="hero-art" aria-label="Vista previa de identidad">
          <div className="art-card art-card-main"><span className="art-index">01</span><strong>{site.name}</strong><span>{site.category}</span></div>
          <div className="art-card art-card-side"><span>CLARO</span><b>cerca · útil · local</b></div>
          <div className="art-ring" />
        </div>
      </section>

      <section className="proof shell" aria-label="Datos visibles">
        {site.highlights.map((item, index) => <div className="proof-item" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
      </section>

      <section className="content-grid shell" id="servicios">
        <div className="section-heading"><p className="eyebrow">Propuesta inicial</p><h2>Una página que explica lo esencial.</h2></div>
        <div className="service-list">
          {site.services.map((service, index) => <article className="service-card" key={service}><span className="service-number">0{index + 1}</span><h3>{service}</h3><p>Alcance sujeto a revisión y aprobación del negocio.</p></article>)}
        </div>
      </section>

      <section className="contact-band shell" id="contacto">
        <div><p className="eyebrow">Encuéntralo</p><h2>{site.name}</h2><p>{site.address}</p><p>{site.hours}</p></div>
        <div className="contact-actions">
          <a className="button button-primary" href={mapUrl} target="_blank" rel="noreferrer">Abrir mapa</a>
          {websiteHref && <a className="button button-ghost" href={websiteHref} target="_blank" rel="noreferrer">Sitio actual</a>}
          {emailHref && <a className="button button-ghost" href={emailHref}>Correo</a>}
          {phoneHref && <a className="button button-ghost" href={phoneHref}>Teléfono</a>}
        </div>
      </section>

      <section className="sources shell">
        <div><p className="eyebrow">Base pública</p><p>Los datos visibles se tomaron de fichas públicas y deben confirmarse con el negocio antes de publicar.</p></div>
        <div className="source-links">{site.sources.map(([label, url]) => <a href={url} target="_blank" rel="noreferrer" key={url}>{label} ↗</a>)}</div>
      </section>

      <footer className="footer shell"><span>KNX04 · Estrategia · Sistemas · Seguridad</span><span>CREATE. SECURE. EVOLVE.</span></footer>
    </main>
  );
}
