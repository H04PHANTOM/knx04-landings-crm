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
    <main className="site site-pollos-lopez" style={{ '--accent': site.accent }}>

      <header className="pollos-header shell" id="inicio"><Brand /><span className="pollos-hot">RECIÉN SALIDO</span><a href="#combos">Combos ↗</a></header>
      <section className="pollos-hero shell"><div className="pollos-copy"><p className="pollos-label">{site.category}</p><h1>La comida familiar empieza con un pollo caliente.</h1><p>{site.intro}</p><a className="pollos-cta" href="#combos">Ver combos <span>↓</span></a></div><div className="pollos-plate"><span>POLLOS<br /><b>LÓPEZ</b></span><small>para llevar</small></div></section>
      <section className="pollos-combos shell" id="combos"><div className="pollos-title"><p className="pollos-label">COMBOS PARA COMPARTIR</p><h2>Elige la mesa completa.</h2></div><div className="pollos-cards">{site.highlights.concat(site.services).map((item,index)=><article key={item}><span>0{index+1}</span><h3>{item}</h3><p>{index%2===0?'Consulta piezas y guarniciones.':'Pide disponibilidad del día.'}</p><a href={phoneHref || mapUrl}>Consultar ↗</a></article>)}</div></section>
      <section className="pollos-order shell"><div><p className="pollos-label">PASA O LLAMA</p><h2>Lo dejamos listo.</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="Pollos López" /></section><footer className="pollos-footer shell"><Brand compact /><span>Comida para compartir.</span></footer>

    </main>
  );
}
