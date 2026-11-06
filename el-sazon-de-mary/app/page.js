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
    <main className="site site-el-sazon-de-mary" style={{ '--accent': site.accent }}>

      <header className="sazon-header shell" id="inicio"><Brand /><span className="sazon-stamp">HECHO EN CASA</span><a href="#menu">Menú de hoy ↓</a></header>
      <section className="sazon-hero shell"><div className="sazon-copy"><p className="sazon-label">{site.category}</p><h1>Cuando el plato sabe a volver.</h1><p>{site.intro}</p><div><a className="sazon-red" href="#menu">Ver menú</a><a className="sazon-link" href={phoneHref || mapUrl}>Pedir información ↗</a></div></div><div className="sazon-kitchen"><span>MARY</span><strong>cocina<br />del día</strong><small>CALDO · POLLO · BISTEC</small></div></section>
      <section className="sazon-menu shell" id="menu"><div className="sazon-menu-title"><span>MENÚ</span><h2>Lo que sale de la cocina.</h2><p>Consulta disponibilidad antes de ordenar.</p></div><div className="sazon-dishes">{site.highlights.concat(site.services).map((item, index) => <article key={item}><span className="dish-index">0{index + 1}</span><h3>{item}</h3><p>{index % 2 === 0 ? 'Plato del día · para llevar o comer aquí.' : 'Una opción para acompañar la comida.'}</p><a href={phoneHref || mapUrl}>Consultar ↗</a></article>)}</div></section>
      <section className="sazon-order shell"><div><p className="sazon-label">ORDENA SIN RODEOS</p><h2>Elige, llama, pasa por él.</h2><p>{site.address}</p></div><ContactLinks label="Pedido y ubicación" /></section><footer className="sazon-footer shell"><Brand compact /><span>Comida mexicana para volver.</span></footer>

    </main>
  );
}
