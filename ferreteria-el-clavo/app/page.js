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
    <main className="site site-ferreteria-el-clavo" style={{ '--accent': site.accent }}>

      <header className="clavo-header shell" id="inicio"><Brand /><div className="clavo-utility"><span>LOCAL</span><span>DIRECTO</span><span>ÚTIL</span></div><a href="#categorias">Categorías ↗</a></header>
      <section className="clavo-hero shell"><div className="clavo-copy"><p className="clavo-label">{site.category}</p><h1>La solución empieza con la pieza correcta.</h1><p>{site.intro}</p><a className="clavo-cta" href="#categorias">Buscar por categoría <span>↓</span></a></div><div className="clavo-shelf"><span>EL CLAVO</span><strong>materiales<br /><i>para resolver</i></strong><small>AV. GUADALAJARA 100B</small></div></section>
      <section className="clavo-categories shell" id="categorias"><div className="clavo-heading"><p className="clavo-label">CATÁLOGO RÁPIDO</p><h2>¿Qué necesitas hoy?</h2></div><div className="clavo-grid">{site.highlights.concat(site.services).map((item,index)=><a className="clavo-card" key={item} href={phoneHref || mapUrl}><span>0{index+1}</span><h3>{item}</h3><p>Consulta existencia y precio en el local.</p><b>→</b></a>)}</div></section>
      <section className="clavo-quote shell"><div><p className="clavo-label">COTIZACIÓN RÁPIDA</p><h2>Trae la medida. Sal con una respuesta.</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="Ferretería El Clavo" /></section><footer className="clavo-footer shell"><Brand compact /><span>Lo que necesitas para resolverlo hoy.</span></footer>

    </main>
  );
}
