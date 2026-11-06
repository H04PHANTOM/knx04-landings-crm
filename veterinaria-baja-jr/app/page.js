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
    <main className="site site-veterinaria-baja-jr" style={{ '--accent': site.accent }}>

      <header className="vet-header shell" id="inicio"><Brand /><span className="vet-open">ATENCIÓN LOCAL</span><a href="#primero">Necesito ayuda ↗</a></header>
      <section className="vet-hero shell"><div className="vet-copy"><p className="vet-label">{site.category}</p><h1>Cuando ellos no pueden decirlo, tú necesitas un camino claro.</h1><p>{site.intro}</p><a className="vet-cta" href="#primero">Ver atención <span>↓</span></a></div><div className="vet-shield"><span>BAJA</span><strong>JR</strong><small>cuidado cercano</small></div></section>
      <section className="vet-first shell" id="primero"><div className="vet-heading"><p className="vet-label">PRIMERO ESTO</p><h2>Encuentra la atención que necesitas.</h2></div><div className="vet-paths">{site.highlights.concat(site.services).map((item,index)=><article key={item}><span className="vet-number">0{index+1}</span><h3>{item}</h3><p>{index===0?'Consulta y valoración.':index===1?'Ubicación y contacto directo.':'Reseñas y seguimiento.'}</p><a href={phoneHref || mapUrl}>Consultar ↗</a></article>)}</div></section>
      <section className="vet-contact shell"><div><p className="vet-label">VISITA</p><h2>{site.name}</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="Veterinaria Baja Jr" /></section><footer className="vet-footer shell"><Brand compact /><span>Cuidado cercano para quienes esperan en casa.</span></footer>

    </main>
  );
}
