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
    <main className="site site-pasteleria-don-pedro" style={{ '--accent': site.accent }}>

      <header className="don-header shell" id="inicio"><Brand /><nav><a href="#ocasiones">Ocasiones</a><a href="#pedir">Pedir</a></nav><span className="don-sugar">✦ hecho para celebrar</span></header>
      <section className="don-hero shell"><div className="don-cake"><span>DON PEDRO</span><strong>pastelería</strong><i>pan · pays · donas</i></div><div className="don-copy"><p className="don-label">{site.category}</p><h1>Un detalle dulce merece una página igual de especial.</h1><p>{site.intro}</p><a className="don-cta" href="#ocasiones">Ver ocasiones <span>→</span></a></div></section>
      <section className="don-occasions shell" id="ocasiones"><div className="don-title"><p className="don-label">PARA HOY / PARA CELEBRAR</p><h2>Escoge el momento.</h2></div><div className="don-grid">{site.highlights.map((item,index)=><article key={item}><span>0{index+1}</span><h3>{item}</h3><p>{index===0?'Cumpleaños y reuniones.':index===1?'Algo para compartir.':'Pan dulce para volver.'}</p><a href={phoneHref || mapUrl}>Consultar ↗</a></article>)}</div></section>
      <section className="don-pedir shell" id="pedir"><div><p className="don-label">CONTACTO</p><h2>Que el pedido empiece aquí.</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="Pastelería Don Pedro" /></section><footer className="don-footer shell"><Brand compact /><span>Un detalle que sí se recuerda.</span></footer>

    </main>
  );
}
