import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = `tel:${site.phone}`;

function Mark() {
  return <a className="clavo-mark" href="#inicio" aria-label={`Inicio de ${site.name}`}><span>EL</span><strong>CLAVO</strong><small>ferretería · materiales</small></a>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return <main className="clavo-page" id="inicio">
    <header className="clavo-header board"><Mark /><div className="clavo-utility"><span>LOCAL</span><span>DIRECTO</span><span>ÚTIL</span></div><nav><a href="#categorias">Categorías</a><a href="#reseñas">Reseñas</a><a href="#visita">Visita</a></nav><a className="clavo-call" href={phoneHref}>664 904 3265 ↗</a></header>

    <section className="clavo-hero board"><div className="clavo-hero-copy"><p className="clavo-kicker">Ferretería · materiales · atención local</p><h1>Resuelve<br /><em>hoy.</em></h1><p>{site.intro}</p><div className="clavo-hero-actions"><a className="clavo-primary" href="#categorias">Ver categorías <span>↓</span></a><a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar ↗</a></div></div><figure className="clavo-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><figcaption>Foto pública · Av. Guadalajara 100 B</figcaption></figure></section>

    <section className="clavo-facts board"><div><strong>10</strong><span>reseñas públicas</span></div><div><strong>9</strong><span>con cinco estrellas</span></div><div><strong>664</strong><span>904 3265</span></div><div><strong>100 B</strong><span>Av. Guadalajara</span></div></section>

    <section className="clavo-categories board" id="categorias"><div className="clavo-categories-head"><p className="clavo-kicker">01 / Encuentra lo que buscas</p><h2>Pregunta por<br /><em>la pieza.</em></h2><p>La página funciona como un mostrador rápido: el cliente mira la categoría, llama y confirma existencia antes de salir.</p></div><div className="clavo-category-grid">{site.categories.map((category, index) => <article key={category.title}><span>0{index + 1}</span><h3>{category.title}</h3><p>{category.description}</p><a href={phoneHref}>Consultar ↗</a></article>)}</div></section>

    <section className="clavo-shelves board" id="reseñas"><div className="clavo-shelves-photo"><img src={site.gallery[1].src} alt={site.gallery[1].alt} /><span>Foto pública de la ficha</span></div><div className="clavo-shelves-copy"><p className="clavo-kicker">02 / Compra local</p><h2>Buen trato.<br /><em>Buen precio.</em></h2><p>{site.reviewSummary}</p><a href={site.mapsProfile} target="_blank" rel="noreferrer">Leer reseñas en Maps ↗</a></div></section>

    <section className="clavo-visit board" id="visita"><div><p className="clavo-kicker">03 / Pasa por aquí</p><h2>{site.address}</h2><p>{site.hours}</p><p className="clavo-note">Horario y existencia se confirman directamente con el local.</p></div><div className="clavo-visit-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Google Maps ↗</a><a href={phoneHref}>Llamar ↗</a></div></section>
    <footer className="clavo-footer board"><Mark /><span>Nombre mostrado como texto hasta validar el logo oficial con el negocio.</span></footer>
  </main>;
}
