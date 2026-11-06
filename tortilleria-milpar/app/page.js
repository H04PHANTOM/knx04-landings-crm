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
    <main className="site site-tortilleria-milpar" style={{ '--accent': site.accent }}>

      <header className="milpar-header shell" id="inicio"><Brand /><span className="milpar-steam">☼ recién hecho</span><a href="#sabor">Sabor ↗</a></header>
      <section className="milpar-hero shell"><div className="milpar-copy"><p className="milpar-label">{site.category}</p><h1>La tortilla todavía puede ser el centro.</h1><p>{site.intro}</p><a className="milpar-cta" href="#sabor">Ver lo de hoy <span>↓</span></a></div><div className="milpar-comal"><span>MILPAR</span><strong>tortilla<br /><i>de diario</i></strong><small>sopes · tamales · antojitos</small></div></section>
      <section className="milpar-sabor shell" id="sabor"><div className="milpar-title"><p className="milpar-label">DEL COMAL</p><h2>Lo que sale caliente.</h2></div><div className="milpar-grid">{site.highlights.concat(site.services).map((item,index)=><article key={item}><span>0{index+1}</span><h3>{item}</h3><p>{index%2===0?'Para llevar a la mesa.':'Pregunta por lo preparado del día.'}</p><a href={phoneHref || mapUrl}>Consultar ↗</a></article>)}</div></section>
      <section className="milpar-find shell"><div><p className="milpar-label">PASA POR AQUÍ</p><h2>{site.name}</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="Tortillería Milpar" /></section><footer className="milpar-footer shell"><Brand compact /><span>El sabor de todos los días.</span></footer>

    </main>
  );
}
