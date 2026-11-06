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
    <main className="site site-tacos-varios-lia" style={{ '--accent': site.accent }}>

      <header className="lia-header shell" id="inicio"><Brand /><nav><a href="#antojitos">Antojitos</a><a href="#pedido">Pedido</a></nav><span className="lia-note">hecho al momento</span></header>
      <section className="lia-hero shell"><div className="lia-scribble">LIA<br /><small>tacos varios</small></div><div className="lia-copy"><p className="lia-label">{site.category}</p><h1>Lo que se antoja, escrito a mano.</h1><p>{site.intro}</p><a className="lia-yellow" href="#antojitos">Ver el pizarrón ↓</a></div></section>
      <section className="lia-board shell" id="antojitos"><div className="lia-board-title"><span>HOY</span><h2>El pizarrón de Lia.</h2><p>{site.address}</p></div><div className="lia-cards">{site.highlights.concat(site.services).map((item,index)=><article key={item}><span className="lia-pin">✦</span><h3>{item}</h3><p>{index%2===0?'Guiso del día / para llevar.':'Acompáñalo con agua fresca.'}</p><a href={phoneHref || mapUrl}>Preguntar ↗</a></article>)}</div></section>
      <section className="lia-pedido shell" id="pedido"><div><p className="lia-label">PEDIDO</p><h2>Primero vemos qué hay, luego cocinamos.</h2><p>{site.hours}</p></div><ContactLinks label="Tacos Varios Lia" /></section><footer className="lia-footer shell"><Brand compact /><span>Comida casera, cerca.</span></footer>

    </main>
  );
}
