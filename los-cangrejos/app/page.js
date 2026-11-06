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
    <main className="site site-los-cangrejos" style={{ '--accent': site.accent }}>

      <header className="cangrejos-header shell" id="inicio"><Brand /><span className="cangrejos-tide">MAREA DEL DÍA · CONSULTAR</span><a href="#mar">Carta ↗</a></header>
      <section className="cangrejos-hero shell"><div className="cangrejos-copy"><p className="cangrejos-label">{site.category}</p><h1>Que el antojo huela a mar.</h1><p>{site.intro}</p><a className="cangrejos-cta" href="#mar">Ver qué salió hoy <span>↓</span></a></div><div className="cangrejos-wave"><span>LOS</span><strong>CANGREJOS</strong><small>tijuana · local</small></div></section>
      <section className="cangrejos-mar shell" id="mar"><div className="cangrejos-heading"><p className="cangrejos-label">01 / LA BARRA</p><h2>Del mar a la mesa.</h2></div><div className="cangrejos-cards">{site.highlights.concat(site.services).map((item,index)=><article key={item}><span>0{index+1}</span><h3>{item}</h3><p>{index===0?'Pregunta por la captura y preparación del día.':'Ideal para compartir o pedir para llevar.'}</p><a href={phoneHref || mapUrl}>Consultar ↗</a></article>)}</div></section>
      <section className="cangrejos-find shell"><div><p className="cangrejos-label">02 / UBICACIÓN</p><h2>{site.name}</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="Los Cangrejos" /></section><footer className="cangrejos-footer shell"><Brand compact /><span>Mariscos para compartir.</span></footer>

    </main>
  );
}
