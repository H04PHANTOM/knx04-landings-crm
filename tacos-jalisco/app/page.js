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
    <main className="site site-tacos-jalisco" style={{ '--accent': site.accent }}>

      <header className="jalisco-header shell" id="inicio"><Brand /><span className="jalisco-live"><i /> abierto por la noche</span><a href="#orden">Ordenar ↗</a></header>
      <section className="jalisco-hero shell"><div className="jalisco-copy"><p className="jalisco-label">{site.category}</p><h1>Tacos que piden otra vuelta.</h1><p>{site.intro}</p><a className="jalisco-red" href="#carta">Ver carta de noche ↓</a></div><div className="jalisco-sign"><span>TJ</span><strong>DESDE<br /><i>JALISCO</i></strong><small>TIJUANA · LOCAL</small></div></section>
      <section className="jalisco-carta shell" id="carta"><div className="jalisco-title"><span>01 / CARTA</span><h2>El antojo está aquí.</h2></div><div className="jalisco-menu">{site.highlights.concat(site.services).map((item,index)=><article key={item}><span className="jalisco-number">0{index+1}</span><div><h3>{item}</h3><p>{index%2===0?'Para comer aquí o llevar.':'Pregunta por lo que salió hoy.'}</p></div><a href={phoneHref || mapUrl}>Pedir ↗</a></article>)}</div></section>
      <section className="jalisco-route shell" id="orden"><div><p className="jalisco-label">02 / LLEGA</p><h2>No lo pienses tanto.</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="Tacos Jalisco" /></section><footer className="jalisco-footer shell"><Brand compact /><span>La noche se arregla con tacos.</span></footer>

    </main>
  );
}
