import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = `tel:${site.phone}`;

function Mark() {
  return <a className="topete-mark" href="#inicio" aria-label={`Inicio de ${site.name}`}><span>CASA</span><strong>TOPETE</strong><small>cenaduría · tijuana</small></a>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return <main className="topete-page" id="inicio">
    <header className="topete-header wrap"><Mark /><nav><a href="#cena">La carta</a><a href="#reseñas">Lo que dicen</a><a href="#visita">Visita</a></nav><a className="topete-call" href={phoneHref}>Llamar ↗</a></header>

    <section className="topete-hero wrap"><div className="topete-hero-copy"><p className="topete-eyebrow">JUEVES — SÁBADO · TARDE / NOCHE</p><h1>La noche<br /><em>sabe a casa.</em></h1><p>{site.intro}</p><div className="topete-actions"><a className="topete-primary" href="#cena">Ver la carta <span>↓</span></a><a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar ↗</a></div></div><figure className="topete-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><figcaption>Foto pública · Los Árboles</figcaption></figure></section>

    <section className="topete-ribbon wrap"><div><strong>154</strong><span>reseñas en Maps</span></div><div><strong>5★</strong><span>129 reseñas con cinco estrellas</span></div><div><strong>664</strong><span>661 6926</span></div><div><strong>66</strong><span>Ave. Los Árboles</span></div></section>

    <section className="topete-menu wrap" id="cena"><div className="topete-menu-head"><p className="topete-eyebrow">01 / Lo que sale</p><h2>Antojitos para<br /><em>compartir.</em></h2><p>La ficha pública menciona pozole, tostadas, sopes, enchiladas y quesadillas. La disponibilidad del día se confirma por teléfono.</p></div><div className="topete-menu-grid">{site.dishes.map((dish, index) => <article key={dish.title}><span>0{index + 1}</span><h3>{dish.title}</h3><p>{dish.description}</p><a href={phoneHref}>Consultar hoy ↗</a></article>)}</div></section>

    <section className="topete-gallery wrap" id="reseñas"><div className="topete-gallery-note"><p className="topete-eyebrow">02 / La mesa</p><h2>Lo rico<br /><em>se comparte.</em></h2><p>{site.reviewSummary}</p><a href={site.mapsProfile} target="_blank" rel="noreferrer">Abrir reseñas en Maps ↗</a></div><div className="topete-gallery-grid"><figure><img src={site.gallery[1].src} alt={site.gallery[1].alt} /><figcaption>Foto pública de la ficha</figcaption></figure><figure><img src={site.gallery[2].src} alt={site.gallery[2].alt} /><figcaption>Foto publicada por clientes</figcaption></figure><figure><img src={site.gallery[3].src} alt={site.gallery[3].alt} /><figcaption>Foto pública de platillo</figcaption></figure></div></section>

    <section className="topete-visit wrap" id="visita"><div><p className="topete-eyebrow">03 / Encuentra la casa</p><h2>{site.address}</h2><p>{site.hours}</p><p className="topete-note">Confirma horario y platillo del día antes de salir.</p></div><div className="topete-visit-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Google Maps ↗</a><a href={phoneHref}>664 661 6926 ↗</a></div></section>
    <footer className="topete-footer wrap"><Mark /><span>Nombre mostrado como texto hasta validar el logo oficial con el negocio.</span></footer>
  </main>;
}
