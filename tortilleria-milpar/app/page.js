import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = site.phone ? `tel:${site.phone}` : null;

function Brand() {
  return <a className="milpar-brand" href="#inicio" aria-label={`Inicio de ${site.name}`}>
    <span className="milpar-mark" aria-hidden="true">M</span>
    <span><b>{site.name}</b><small>{site.category}</small></span>
  </a>;
}

function ActionLinks() {
  return <div className="milpar-actions">
    <a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar <span>↗</span></a>
    {phoneHref && <a href={phoneHref}>Llamar <span>↗</span></a>}
    {site.socialUrl && <a href={site.socialUrl} target="_blank" rel="noreferrer">Instagram <span>↗</span></a>}
  </div>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return <main className="milpar-site" id="inicio">
    <header className="milpar-top shell">
      <Brand />
      <nav><a href="#productos">Productos</a><a href="#local">El local</a><a className="milpar-pill" href={mapUrl} target="_blank" rel="noreferrer">Visítanos ↗</a></nav>
    </header>

    <section className="milpar-hero shell">
      <div className="milpar-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><span>En Las Huertas · Tijuana</span></div>
      <div className="milpar-hero-copy"><p className="eyebrow">{site.category}</p><h1>Tortilla caliente.<br /><em>Comida que reúne.</em></h1><p>{site.intro}</p><div className="milpar-hero-actions"><a className="milpar-primary" href="#productos">Ver productos <span>↓</span></a><a className="milpar-text-link" href={mapUrl} target="_blank" rel="noreferrer">Abrir Maps ↗</a></div></div>
    </section>

    <section className="milpar-proof shell"><div><strong>{site.rating}</strong><span>★ en Google Maps</span></div><div><strong>{site.reviewCount}</strong><span>reseñas públicas</span></div><div><strong>664</strong><span>103 6641</span></div><div><strong>07:00</strong><span>apertura estimada</span></div></section>

    <section className="milpar-products shell" id="productos">
      <div className="milpar-section-head"><div><p className="eyebrow">Del mostrador</p><h2>Lo que puedes llevar hoy</h2></div><p>Consulta disponibilidad y prepara tu visita. La ficha pública también muestra servicio a domicilio.</p></div>
      <div className="milpar-menu-grid">{site.menuGroups.map((group) => <article className="milpar-menu-card" key={group.title}><span className="milpar-menu-index">{group.number}</span><h3>{group.title}</h3><p>{group.description}</p><ul>{group.items.map((item) => <li key={item}><span>{item}</span><b>●</b></li>)}</ul><a href={phoneHref || mapUrl} target={phoneHref ? undefined : '_blank'} rel={phoneHref ? undefined : 'noreferrer'}>Consultar disponibilidad ↗</a></article>)}</div>
    </section>

    <section className="milpar-gallery shell"><div className="milpar-gallery-main"><img src={site.gallery[1].src} alt={site.gallery[1].alt} /><p>Lo recién preparado se ve mejor en persona.</p></div><div className="milpar-gallery-note"><p className="eyebrow">Una parada de barrio</p><h2>Pasas por tortillas.<br /><em>Te quedas por el antojo.</em></h2><p>{site.deliveryNote}</p><a href={mapUrl} target="_blank" rel="noreferrer">Ver ubicación exacta ↗</a></div></section>

    <section className="milpar-local shell" id="local"><div><p className="eyebrow">Encuéntranos</p><h2>{site.name}</h2><p>{site.address}</p><p className="milpar-hours">{site.hours}</p></div><ActionLinks /></section>
    <footer className="milpar-footer shell"><Brand /><span>Información pública · confirmar horarios y productos antes de entregar.</span></footer>
  </main>;
}
