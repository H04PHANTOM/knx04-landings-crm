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
    <main className="site site-cenaduria-casa-topete" style={{ '--accent': site.accent }}>

      <header className="topete-header shell" id="inicio"><Brand /><div className="topete-hours">JUE — SÁB<br /><strong>TARDE / NOCHE</strong></div><a href="#cena" className="topete-reserve">Ver la cena ↗</a></header>
      <section className="topete-hero shell"><div className="topete-neon">CASA<br /><i>TOPETE</i></div><div className="topete-copy"><p className="topete-label">{site.category}</p><h1>La noche empieza con un plato humeando.</h1><p>{site.intro}</p><a className="topete-button" href="#cena">Entrar al menú <span>↓</span></a></div></section>
      <section className="topete-cena shell" id="cena"><div className="topete-cena-head"><p className="topete-label">LA CENA</p><h2>Platillos para pedir al centro.</h2><span>Una carta nocturna, sin perderse.</span></div><div className="topete-board">{site.highlights.map((item,index)=><article key={item}><span>0{index+1}</span><h3>{item}</h3><p>{index === 0 ? 'Calientito y servido al momento.' : 'Un clásico de la casa para compartir.'}</p><a href={phoneHref || mapUrl}>Consultar ↗</a></article>)}</div></section>
      <section className="topete-contact shell"><div><p className="topete-label">MESA Y MAPA</p><h2>{site.name}</h2><p>{site.address}</p><p>{site.phone || 'Teléfono por confirmar'}</p><LocalNote /></div><ContactLinks label="Casa Topete" /></section><footer className="topete-footer shell"><Brand compact /><span>La noche sabe a casa.</span></footer>

    </main>
  );
}
