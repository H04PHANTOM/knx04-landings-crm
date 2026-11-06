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
    <main className="site site-pradera-el-cafe" style={{ '--accent': site.accent }}>

      <header className="pradera-header shell" id="inicio"><Brand /><nav><a href="#agenda">Agenda</a><a href="#menu">Menú</a><a href="#visita">El espacio</a></nav><span className="pradera-sun">☼</span></header>
      <section className="pradera-hero shell"><div className="pradera-sunrise"><span>PRADERA</span><b>el café</b><i>brunch · terraza · música</i></div><div className="pradera-copy"><p className="pradera-label">{site.category}</p><h1>Quédate a desayunar la tarde.</h1><p>{site.intro}</p><a className="pradera-cta" href="#agenda">Ver lo que pasa hoy <span>→</span></a></div></section>
      <section className="pradera-agenda shell" id="agenda"><div className="pradera-heading"><p className="pradera-label">HOY EN PRADERA</p><h2>Un calendario que se antoja.</h2></div><div className="pradera-events"><article className="pradera-event featured"><span>01</span><h3>Brunch sin prisa</h3><p>{site.highlights[0]}</p><a href="#menu">Ver menú →</a></article><article className="pradera-event"><span>02</span><h3>Terraza abierta</h3><p>{site.highlights[1] || 'Espacio exterior'}</p><a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar →</a></article><article className="pradera-event"><span>03</span><h3>Música publicada</h3><p>{site.highlights[2] || 'Agenda por confirmar'}</p><a href={phoneHref || mapUrl}>Consultar →</a></article></div></section>
      <section className="pradera-menu shell" id="menu"><div><p className="pradera-label">CARTA</p><h2>Para pedir otra ronda.</h2></div><div className="pradera-menu-list">{site.services.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><a href={phoneHref || mapUrl}>Preguntar ↗</a></div>)}</div></section>
      <section className="pradera-contact shell" id="visita"><div><p className="pradera-label">ENCUENTRA LA MESA</p><h2>{site.name}</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="Pradera" /></section><footer className="pradera-footer shell"><Brand compact /><span>Un espacio para quedarse.</span></footer>

    </main>
  );
}
