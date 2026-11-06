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
    <main className="site site-carniceria-el-chaparral" style={{ '--accent': site.accent }}>

      <header className="chap-header shell" id="inicio"><Brand /><span className="chap-mark">CORTE LOCAL</span><a href="#cortes">Cortes ↗</a></header>
      <section className="chap-hero shell"><div className="chap-copy"><p className="chap-label">{site.category}</p><h1>El corte de hoy, sin dar vueltas.</h1><p>{site.intro}</p><a className="chap-cta" href="#cortes">Ver el mostrador <span>↓</span></a></div><div className="chap-counter"><span>EL<br />CHAPARRAL</span><strong>01</strong><small>cortes · paquetes · barrio</small></div></section>
      <section className="chap-cuts shell" id="cortes"><div className="chap-heading"><p className="chap-label">MOSTRADOR</p><h2>Para la comida de hoy.</h2></div><div className="chap-grid">{site.highlights.concat(site.services).map((item,index)=><article key={item}><span>0{index+1}</span><h3>{item}</h3><p>{index%2===0?'Pregunta por corte, peso y disponibilidad.':'Paquetes para llevar a la parrilla.'}</p><a href={phoneHref || mapUrl}>Consultar ↗</a></article>)}</div></section>
      <section className="chap-contact shell"><div><p className="chap-label">ENCUENTRA EL MOSTRADOR</p><h2>{site.name}</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="Carnicería El Chaparral" /></section><footer className="chap-footer shell"><Brand compact /><span>Cortes para la comida de hoy.</span></footer>

    </main>
  );
}
