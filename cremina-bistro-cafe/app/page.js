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
    <main className="site site-cremina-bistro-cafe" style={{ '--accent': site.accent }}>

      <header className="cremina-header shell" id="inicio"><Brand /><nav><a href="#carta">Carta</a><a href="#ambiente">El espacio</a><a href="#visita">Visita</a></nav><span className="cremina-open">HOY · 07:00 — 20:00*</span></header>
      <section className="cremina-hero shell"><div className="cremina-copy"><p className="cremina-label">CAFÉ · BRUNCH · PLAZA LAS BRISAS</p><h1>La mañana puede quedarse un rato más.</h1><p>{site.intro}</p><div className="cremina-actions"><a className="cremina-dark" href="#carta">Ver la carta</a><a className="cremina-outline" href={mapUrl} target="_blank" rel="noreferrer">Llegar a L42 ↗</a></div></div><div className="cremina-table"><div className="cremina-cup">☕</div><span>CREMINA</span><small>un lugar para sentarse</small></div></section>
      <section className="cremina-menu shell" id="carta"><div className="cremina-menu-intro"><p className="cremina-label">CARTA DE LA CASA</p><h2>Algo para cada hora.</h2><p>Café, desayunos y comida para llevar. La disponibilidad cambia por día.</p></div><div className="cremina-menu-board">{site.highlights.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3><p>{index === 0 ? 'Para empezar con calma.' : index === 1 ? 'Para acompañar la conversación.' : 'Para llevarte algo más que un café.'}</p><b>{index === 0 ? 'MAÑANA' : index === 1 ? 'MEDIODÍA' : 'TODO EL DÍA'}</b></article>)}</div></section>
      <section className="cremina-ambience shell" id="ambiente"><div className="cremina-note"><span>02</span><h2>Un espacio para bajar el ritmo.</h2><p>Plaza Las Brisas · Local L42</p></div><div className="cremina-review"><strong>4.9</strong><span>de 5 en reseñas públicas</span><p>“El lugar es cómodo, limpio y muy lindo.”</p><small>Reseña pública consultada</small></div></section>
      <section className="cremina-contact shell" id="visita"><div><p className="cremina-label">VISITA</p><h2>{site.name}</h2><p>{site.address}</p><LocalNote /></div><ContactLinks label="Cremina" /></section><footer className="cremina-footer shell"><Brand compact /><span>Una mesa, un café, un rato.</span></footer>

    </main>
  );
}
