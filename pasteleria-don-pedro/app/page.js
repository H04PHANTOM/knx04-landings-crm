import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = `tel:${site.phone}`;

function Wordmark() {
  return <a className="don-wordmark" href="#inicio" aria-label={`Inicio de ${site.name}`}><span>Pastelería</span><strong>Don Pedro</strong><small>Plaza Carrousel · Las Brisas</small></a>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return <main className="don-page" id="inicio">
    <header className="don-header shell"><Wordmark /><nav><a href="#ocasion">Elige tu ocasión</a><a href="#catalogo">Catálogo</a><a href="#visita">Ubicación</a></nav><a className="don-order" href={phoneHref}>Pedir por teléfono ↗</a></header>

    <section className="don-hero shell"><div className="don-hero-copy"><p className="don-kicker">Pastelería · para llevar · entrega</p><h1>Algo bonito<br /><em>para hoy.</em></h1><p>{site.intro}</p><div className="don-hero-actions"><a className="don-primary" href="#catalogo">Ver catálogo <span>↓</span></a><a href={mapUrl} target="_blank" rel="noreferrer">Llegar a Plaza Carrousel ↗</a></div></div><div className="don-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><span>Ficha pública de Maps · {site.rating}</span></div></section>

    <section className="don-occasion shell" id="ocasion"><div className="don-occasion-head"><p className="don-kicker">01 / Dime para qué</p><h2>Elige el<br /><em>momento.</em></h2><p>La vitrina cambia según la ocasión. Aquí empieza una conversación más fácil que una lista interminable.</p></div><div className="don-occasion-list">{site.occasions.map((item, index) => <a href="#catalogo" key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><b>↗</b></a>)}</div></section>

    <section className="don-catalog shell" id="catalogo"><div className="don-catalog-head"><p className="don-kicker">02 / Vitrina pública</p><h2>Pasteles que se<br /><em>ven desde lejos.</em></h2><p>{site.catalogNote}</p></div><div className="don-catalog-grid"><article className="don-catalog-photo"><img src={site.gallery[1].src} alt={site.gallery[1].alt} /><span>Fotos públicas de clientes</span></article>{site.catalog.map((item, index) => <article className={`don-catalog-card don-card-${index + 1}`} key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p><a href={phoneHref}>{item.action} ↗</a></article>)}</div></section>

    <section className="don-review shell"><div><p className="don-kicker">03 / Lo que aparece en Maps</p><h2>Elige con<br />confianza.</h2></div><div className="don-review-quote"><strong>{site.rating} <span>★</span></strong><p>{site.reviewSummary}</p><a href={site.mapsProfile} target="_blank" rel="noreferrer">Ver las {site.reviewCount} reseñas ↗</a></div></section>

    <section className="don-visit shell" id="visita"><div><p className="don-kicker">Ven a recoger o pregunta por entrega</p><h2>{site.address}</h2><p>{site.hours}</p><p className="don-note">La ficha pública confirma que se encuentra dentro de Plaza Carrousel. Confirma disponibilidad, precio y horario antes de publicar la versión definitiva.</p></div><div className="don-visit-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Google Maps ↗</a><a href={phoneHref}>664 626 1537 ↗</a></div></section>
    <footer className="don-footer shell"><Wordmark /><span>Nombre mostrado como texto hasta validar el logo oficial con el negocio.</span></footer>
  </main>;
}
