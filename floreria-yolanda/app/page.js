import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = site.phone ? `tel:${site.phone}` : null;
const websiteHref = site.website && site.website.startsWith('http') ? site.website : null;
const initials = site.name.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join('').toUpperCase();

function Brand({ compact = false }) {
  return (
    <a className={`brand-lockup ${compact ? 'brand-lockup-compact' : ''}`} href="#inicio" aria-label={`Inicio de ${site.name}`}>
      {site.logoUrl ? <img src={site.logoUrl} alt={`Logo de ${site.name}`} /> : <span className="brand-initials" aria-hidden="true">{initials}</span>}
      <span><strong>{site.name}</strong><small>{site.category}</small></span>
    </a>
  );
}

function ContactLinks({ label = 'Contacto' }) {
  return (
    <div className="contact-links" aria-label={label}>
      <a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar <span>↗</span></a>
      {phoneHref && <a href={phoneHref}>Llamar <span>↗</span></a>}
      {websiteHref && <a href={websiteHref} target="_blank" rel="noreferrer">Sitio actual <span>↗</span></a>}
    </div>
  );
}

function LocalNote() {
  return <p className="local-note">Horarios y disponibilidad: confirmar directamente con el local.</p>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return (
    <main className="site site-floreria-yolanda" style={{ '--accent': site.accent }}>

      <header className="flor-header shell" id="inicio">
        <Brand />
        <nav><a href="#ocasiones">Ocasiones</a><a href="#catalogo">Arreglos</a><a href="#visita">Visítanos</a></nav>
        <a className="flor-pill" href={phoneHref || mapUrl}>{phoneHref ? 'Encargar por teléfono' : 'Ver ubicación'}</a>
      </header>
      <section className="flor-hero shell">
        <div className="flor-hero-copy"><p className="flor-kicker">{site.category}</p><h1>Un detalle que llega antes que las palabras.</h1><p>{site.intro}</p><div className="flor-actions"><a className="flor-primary" href="#catalogo">Explorar arreglos</a><a className="flor-secondary" href={mapUrl} target="_blank" rel="noreferrer">Encontrar la florería</a></div></div>
        <div className="flor-still" aria-label="Composición visual de flores"><span className="flor-stem stem-a" /><span className="flor-stem stem-b" /><span className="flor-bloom bloom-a" /><span className="flor-bloom bloom-b" /><span className="flor-bloom bloom-c" /><div><small>YOLANDA</small><strong>flores para hoy</strong></div></div>
      </section>
      <section className="flor-occasion shell" id="ocasiones"><div><p className="flor-kicker">Elige el gesto</p><h2>Una ocasión, un arreglo.</h2></div><div className="flor-occasion-grid">{site.highlights.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Consulta combinaciones, tamaño y disponibilidad del día.</p></article>)}</div></section>
      <section className="flor-catalog shell" id="catalogo"><div className="flor-catalog-head"><div><p className="flor-kicker">Vitrina local</p><h2>Lo que puedes pedir</h2></div><span>Ramos · arreglos · regalos</span></div><div className="flor-product-grid">{site.services.map((service, index) => <article key={service} className={`flor-product flor-product-${index + 1}`}><span className="flor-product-number">0{index + 1}</span><h3>{service}</h3><p>{index === 0 ? 'Una selección para consultar por teléfono y preparar con la florería.' : 'Un complemento para que el pedido y la visita sean más sencillos.'}</p><a href={phoneHref || mapUrl}>{phoneHref ? 'Consultar disponibilidad' : 'Preguntar en el local'} ↗</a></article>)}</div></section>
      <section className="flor-visit shell" id="visita"><div><p className="flor-kicker">Pasa por aquí</p><h2>{site.name}</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="Visita y pedido" /></section>
      <footer className="flor-footer shell"><Brand compact /><span>Flores, regalos y atención local.</span></footer>

    </main>
  );
}
