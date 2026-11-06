import { site } from './site-data';
import './globals.css';

const linkFor = (url, basePath = '') => {
  if (!url) return null;
  return url.startsWith('http') ? url : `${basePath}${url}`;
};

const detailFor = (service) => {
  const normalized = service.toLowerCase();
  if (normalized.includes('menú') || normalized.includes('catalog')) return 'Presenta productos, horarios y formas de pedir desde el celular.';
  if (normalized.includes('agenda') || normalized.includes('reserv')) return 'Facilita que una persona consulte disponibilidad y se ponga en contacto.';
  if (normalized.includes('reseña') || normalized.includes('qr')) return 'Acerca la ficha de Google y facilita que los clientes dejen una reseña.';
  if (normalized.includes('formulario') || normalized.includes('cotización')) return 'Recibe solicitudes con la información necesaria para responder más rápido.';
  if (normalized.includes('mapa') || normalized.includes('ubicación')) return 'Hace visible el local, la ruta y los datos esenciales de atención.';
  if (normalized.includes('instagram') || normalized.includes('contenido')) return 'Ordena la comunicación visual para que el negocio tenga una presencia constante.';
  return 'Una sección clara para que el visitante entienda el servicio y sepa cómo contactarte.';
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
        <a className="brand" href="#inicio" aria-label="Inicio del sitio">
          <img src={brandHref} alt="KNX04" width="36" height="36" />
          <span>KNX04 <small>SOLUCIÓN DIGITAL</small></span>
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <span className="status-dot">SITIO DIGITAL</span>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">{site.category}</p>
          <h1>{site.tag}</h1>
          <p className="lead">{site.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#servicios">Conocer servicios</a>
            {phoneHref ? <a className="button button-ghost" href={phoneHref}>Llamar ahora</a> : <a className="button button-ghost" href="#contacto">Cómo llegar</a>}
          </div>
          <p className="microcopy">Información clara, contacto directo y una experiencia pensada para celular.</p>
        </div>
        <div className="hero-art" aria-label="Identidad del negocio">
          <div className="art-card art-card-main"><span className="art-index">01</span><strong>{site.name}</strong><span>{site.category}</span><em>Atención local</em></div>
          <div className="art-card art-card-side"><span>ENCUÉNTRALO</span><b>cerca · útil · directo</b></div>
          <div className="art-ring" />
        </div>
      </section>

      <section className="proof shell" aria-label="Lo que encontrará el visitante">
        {site.highlights.map((item, index) => <div className="proof-item" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
      </section>

      <section className="content-grid shell" id="servicios">
        <div className="section-heading"><p className="eyebrow">Experiencia del cliente</p><h2>Todo lo importante en un solo lugar.</h2><p className="section-copy">Una página práctica para que las personas conozcan el negocio, encuentren lo que buscan y den el siguiente paso.</p></div>
        <div className="service-list">
          {site.services.map((service, index) => <article className="service-card" key={service}><span className="service-number">0{index + 1}</span><h3>{service}</h3><p>{detailFor(service)}</p></article>)}
        </div>
      </section>

      <section className="benefits shell" aria-label="Beneficios del sitio">
        <article className="benefit-card"><span>01</span><h3>Más fácil de encontrar</h3><p>Una dirección clara, horarios visibles y un botón para abrir el mapa desde el teléfono.</p></article>
        <article className="benefit-card"><span>02</span><h3>Más fácil de contactar</h3><p>La persona puede llamar, consultar o pedir información sin buscar en varias plataformas.</p></article>
        <article className="benefit-card"><span>03</span><h3>Listo para crecer</h3><p>El contenido se puede ampliar con fotos, menú, promociones, reservas o una tienda cuando el negocio lo necesite.</p></article>
      </section>

      <section className="contact-band shell" id="contacto">
        <div><p className="eyebrow">Visítalo o contáctalo</p><h2>{site.name}</h2><p>{site.address}</p><p>{site.hours}</p></div>
        <div className="contact-actions">
          <a className="button button-primary" href={mapUrl} target="_blank" rel="noreferrer">Abrir mapa</a>
          {websiteHref && <a className="button button-ghost" href={websiteHref} target="_blank" rel="noreferrer">Sitio actual</a>}
          {emailHref && <a className="button button-ghost" href={emailHref}>Correo</a>}
          {phoneHref && <a className="button button-ghost" href={phoneHref}>Teléfono</a>}
        </div>
      </section>

      <section className="sources shell">
        <div><p className="eyebrow">Información del local</p><p>Horarios, teléfono y ubicación se muestran con datos públicos y deben confirmarse con el negocio antes de entregar la versión final.</p></div>
        <div className="source-links">{site.sources.map(([label, url]) => <a href={url} target="_blank" rel="noreferrer" key={url}>{label} ↗</a>)}</div>
      </section>

      <footer className="footer shell"><span>KNX04 · Estrategia · Sistemas · Seguridad</span><span>CREATE. SECURE. EVOLVE.</span></footer>
    </main>
  );
}
