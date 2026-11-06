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
    <main className="site site-blue-barber" style={{ '--accent': site.accent }}>

      <header className="blue-top shell" id="inicio"><Brand /><div className="blue-nav"><a href="#trabajos">Trabajos</a><a href="#servicios">Servicios</a><a href="#llegar">Llegar</a></div><span className="blue-code">BB / 01</span></header>
      <section className="blue-hero shell"><div className="blue-hero-title"><span className="blue-vertical">BLUE BARBER · TIJUANA</span><h1>Sharp cuts.<br /><i>Local energy.</i></h1><p>{site.intro}</p><a className="blue-button" href="#servicios">Ver servicios <span>↘</span></a></div><div className="blue-poster"><span className="blue-poster-word">BLUE</span><div className="blue-poster-line" /><small>AV. GUADALAJARA 7018<br />LUN — DOM</small></div></section>
      <section className="blue-work shell" id="trabajos"><div className="blue-section-head"><p>01 / IDENTIDAD</p><h2>El corte habla antes que tú.</h2></div><div className="blue-work-grid"><article className="blue-work-main"><span>01</span><strong>Fade<br />preciso</strong><small>Portafolio para decidir sin adivinar.</small></article><article className="blue-work-tall"><span>02</span><strong>Barba<br />con forma</strong><small>Consulta el acabado que buscas.</small></article><article className="blue-work-note"><span>03</span><p>{site.address}</p><a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar →</a></article></div></section>
      <section className="blue-services shell" id="servicios"><div className="blue-section-head"><p>02 / SERVICIOS</p><h2>Elige tu siguiente movimiento.</h2></div><div className="blue-list">{site.services.concat(site.highlights).map((service, index) => <div className="blue-row" key={service}><span>0{index + 1}</span><h3>{service}</h3><a href={phoneHref || mapUrl}>Consultar ↗</a></div>)}</div></section>
      <footer className="blue-footer shell" id="llegar"><Brand compact /><div><p>{site.hours}</p><ContactLinks label="Blue Barber" /></div></footer>

    </main>
  );
}
