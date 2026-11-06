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
    <main className="site site-barberia-jr" style={{ '--accent': site.accent }}>

      <div className="jr-wrap" id="inicio"><header className="jr-header"><Brand /><span className="jr-chip">RESERVAS ABIERTAS</span><a href={phoneHref || '#reservar'} className="jr-small-link">{phoneHref ? 'Llamar' : 'Ver servicios'} ↗</a></header>
      <section className="jr-hero"><div className="jr-hero-copy"><p className="jr-eyebrow">{site.category}</p><h1>Tu siguiente corte, elegido en dos minutos.</h1><p>{site.intro}</p><a className="jr-cta" href="#reservar">Elegir servicio <span>→</span></a></div><div className="jr-portrait"><div className="jr-monogram">JR</div><p>Barbería JR</p><small>corte · barba · detalle</small></div></section>
      <section className="jr-book" id="reservar"><div className="jr-progress"><span className="active"><b>01</b> Servicio</span><span><b>02</b> Agenda</span><span><b>03</b> Confirmación</span></div><div className="jr-book-grid"><div><p className="jr-eyebrow">Elige tu servicio</p><h2>Primero el look.</h2><div className="jr-service-list">{site.highlights.concat(site.services).map((item, index) => <a key={item} href={phoneHref || mapUrl} className="jr-service"><span className="jr-icon">{['✂','◉','✦','＋','◌'][index % 5]}</span><strong>{item}</strong><span>Consultar ↗</span></a>)}</div></div><aside className="jr-sidecard"><span className="jr-side-label">Antes de venir</span><h3>Guarda la dirección y llega con tiempo.</h3><p>{site.address}</p><a href={mapUrl} target="_blank" rel="noreferrer">Abrir mapa →</a><LocalNote /></aside></div></section>
      <footer className="jr-footer"><Brand compact /><ContactLinks label="Barbería JR" /></footer></div>

    </main>
  );
}
