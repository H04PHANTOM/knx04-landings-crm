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
    <main className="site site-la-super-torta" style={{ '--accent': site.accent }}>

      <header className="torta-header shell" id="inicio"><Brand /><span className="torta-receipt">DESDE TEMPRANO</span><a href="#menu">Menú ↗</a></header>
      <section className="torta-hero shell"><div className="torta-copy"><p className="torta-label">{site.category}</p><h1>El desayuno que sí alcanza.</h1><p>{site.intro}</p><a className="torta-cta" href="#menu">Armar pedido <span>↓</span></a></div><div className="torta-ticket"><span>LA SUPER TORTA</span><strong>☻</strong><small>07:30 — 17:30*</small><em>para llevar / aquí</em></div></section>
      <section className="torta-menu shell" id="menu"><div className="torta-menu-title"><span>RECIBO DEL DÍA</span><h2>Marca lo que vas a pedir.</h2></div><div className="torta-lines">{site.highlights.concat(site.services).map((item,index)=><div key={item}><span>0{index+1}</span><strong>{item}</strong><small>{index%2===0?'torta · desayuno':'combo · para llevar'}</small><a href={phoneHref || mapUrl}>Consultar ↗</a></div>)}</div></section>
      <section className="torta-find shell"><div><p className="torta-label">PASA POR AQUÍ</p><h2>{site.name}</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="La Super Torta" /></section><footer className="torta-footer shell"><Brand compact /><span>Rápido, cerca y claro.</span></footer>

    </main>
  );
}
