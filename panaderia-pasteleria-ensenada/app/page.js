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
    <main className="site site-panaderia-pasteleria-ensenada" style={{ '--accent': site.accent }}>

      <header className="pan-header shell" id="inicio"><Brand /><div className="pan-badge">HORNEADO HOY</div><a href="#vitrina">Vitrina ↗</a></header>
      <section className="pan-hero shell"><div className="pan-copy"><p className="pan-label">{site.category}</p><h1>El olor del pan también puede encontrarte.</h1><p>{site.intro}</p><a className="pan-cta" href="#vitrina">Entrar a la vitrina <span>↓</span></a></div><div className="pan-oven"><span>ENSENADA</span><strong>pan<br /><i>de barrio</i></strong><small>dulce · salado · eventos</small></div></section>
      <section className="pan-vitrina shell" id="vitrina"><div className="pan-heading"><p className="pan-label">LA VITRINA</p><h2>Lo que sale del horno.</h2></div><div className="pan-shelves">{site.highlights.concat(site.services).map((item,index)=><article key={item} className={`pan-shelf pan-shelf-${index+1}`}><span>0{index+1}</span><h3>{item}</h3><p>{index===0?'Para celebrar o llevar a la mesa.':'Consulta disponibilidad y pedidos.'}</p><a href={phoneHref || mapUrl}>Preguntar ↗</a></article>)}</div></section>
      <section className="pan-order shell"><div><p className="pan-label">PEDIDOS</p><h2>Pasteles, mesas y pan para el día.</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="Panadería Ensenada" /></section><footer className="pan-footer shell"><Brand compact /><span>Pan recién hecho para cada ocasión.</span></footer>

    </main>
  );
}
