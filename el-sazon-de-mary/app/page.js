import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = `tel:${site.phone}`;

function Wordmark() {
  return <a className="sazon-wordmark" href="#inicio" aria-label={`Inicio de ${site.name}`}><span>EL SAZÓN</span><strong>de Mary</strong><small>antojitos mexicanos</small></a>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return <main className="sazon-page" id="inicio">
    <header className="sazon-header shell"><Wordmark /><div className="sazon-rating"><strong>{site.rating}</strong><span>★ · {site.reviewCount} reseñas</span></div><nav><a href="#menu">Menú</a><a href="#reseñas">Reseñas</a><a href="#visita">Visita</a></nav><a className="sazon-phone" href={phoneHref}>Llamar ↗</a></header>

    <section className="sazon-hero shell"><div className="sazon-hero-copy"><p className="sazon-kicker">{site.category}</p><h1>Comida que<br /><em>sabe a casa.</em></h1><p>{site.intro}</p><div className="sazon-hero-actions"><a className="sazon-primary" href="#menu">Abrir menú <span>↓</span></a><a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar ↗</a></div></div><div className="sazon-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><span>Foto pública · Fortín de las Flores</span></div></section>

    <section className="sazon-facts shell"><div><strong>4.4</strong><span>Google Maps</span></div><div><strong>99</strong><span>reseñas públicas</span></div><div><strong>$100—200</strong><span>por persona</span></div><div><strong>07:30</strong><span>abre la cocina</span></div></section>

    <section className="sazon-menu shell" id="menu"><div className="sazon-menu-intro"><p className="sazon-kicker">01 / La carta</p><h2>Hoy se come<br /><em>como en casa.</em></h2><p>La ficha pública muestra consumo en el lugar, para llevar y entrega a domicilio. Los nombres del menú se presentan como guía para confirmar el plato del día.</p></div><div className="sazon-dish-list">{site.dishes.map((dish, index) => <article key={dish.title}><span>0{index + 1}</span><div><h3>{dish.title}</h3><p>{dish.description}</p></div><a href={phoneHref}>Preguntar ↗</a></article>)}</div></section>

    <section className="sazon-table shell"><div className="sazon-table-photo"><img src={site.gallery[1].src} alt={site.gallery[1].alt} /><span>Foto pública de la ficha</span></div><div className="sazon-table-copy"><p className="sazon-kicker">02 / La mesa</p><h2>Un plato caliente<br /><em>y cero rodeos.</em></h2><p>{site.reviewSummary}</p><a href={site.mapsProfile} target="_blank" rel="noreferrer">Leer las reseñas de Maps ↗</a></div></section>

    <section className="sazon-visit shell" id="visita"><div><p className="sazon-kicker">03 / Ven a comer</p><h2>{site.address}</h2><p>{site.hours}</p><p className="sazon-note">Consumo en el lugar, para llevar y entrega aparecen en la ficha pública; confirma cobertura y horarios antes de publicar.</p></div><div className="sazon-visit-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Google Maps ↗</a><a href={phoneHref}>664 650 4269 ↗</a></div></section>
    <footer className="sazon-footer shell"><Wordmark /><span>Nombre mostrado como texto hasta validar el logo oficial con el negocio.</span></footer>
  </main>;
}
