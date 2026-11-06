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
    <main className="site site-fuel-coffee-bar" style={{ '--accent': site.accent }}>

      <header className="fuel-header shell" id="inicio"><Brand /><div className="fuel-status"><span /> brewing locally</div><a href="#eventos" className="fuel-menu-link">Eventos ↗</a></header>
      <section className="fuel-hero shell"><div className="fuel-bean" aria-hidden="true"><span>FUEL</span><b>COFFEE<br />BAR</b></div><div className="fuel-copy"><p className="fuel-label">{site.category}</p><h1>Tu ritmo, servido en otra temperatura.</h1><p>{site.intro}</p><a className="fuel-cta" href="#menu">Explorar bebidas <span>↓</span></a></div></section>
      <section className="fuel-strip"><span>ESPRESSO</span><span>MATCHA</span><span>COLD BREW</span><span>EVENTOS</span></section>
      <section className="fuel-menu shell" id="menu"><div className="fuel-heading"><p className="fuel-label">01 / BARRA</p><h2>La carta rápida.</h2><span>Pregunta por disponibilidad del día.</span></div><div className="fuel-items">{site.highlights.concat(site.services).map((item, index) => <article key={item}><span>0{index + 1}</span><div><h3>{item}</h3><p>{index % 2 === 0 ? 'Bebida o servicio para pedir en el local.' : 'Una opción para llevar el café más lejos.'}</p></div><a href={phoneHref || mapUrl}>Consultar ↗</a></article>)}</div></section>
      <section className="fuel-events shell" id="eventos"><div><p className="fuel-label">02 / PARA EVENTOS</p><h2>Café que también sale del local.</h2><p>La barra puede acompañar reuniones y activaciones. Consulta disponibilidad.</p></div><a className="fuel-outline" href={phoneHref || mapUrl}>{phoneHref ? 'Llamar para eventos' : 'Preguntar por eventos'} ↗</a></section>
      <footer className="fuel-footer shell"><Brand compact /><div><p>{site.address}</p><ContactLinks label="Fuel Coffee Bar" /></div></footer>

    </main>
  );
}
