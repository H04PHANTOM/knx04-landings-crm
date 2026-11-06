import { site } from './site-data';
import './globals.css';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${site.name}, ${site.address}`);

export const metadata = { title: site.name, description: site.intro };

function Wordmark() {
  return <a className="lia-wordmark" href="#inicio" aria-label={`Inicio de ${site.name}`}><strong>TACOS VARIOS</strong><b>LIA</b><small>guisos · milanesas · aguas</small></a>;
}

function MapCard() {
  return <a className="lia-map-card" href={mapUrl} target="_blank" rel="noreferrer" aria-label="Abrir Tacos Varios Lia en Google Maps"><span className="lia-map-street street-a" /><span className="lia-map-street street-b" /><span className="lia-map-pin" /><div className="lia-map-label"><b>Av. Las Brisas 15864</b><span>Las Brisas · Tijuana</span><small>Abrir Google Maps ↗</small></div></a>;
}

export default function Page() {
  return (
    <main className="lia-site" id="inicio">
      <header className="lia-header"><Wordmark /><nav aria-label="Navegación principal"><a href="#menu">Menú</a><a href="#como">Cómo pedir</a><a href="#reseñas">Reseñas</a><a href="#visita">Ubicación</a></nav><a className="lia-header-cta" href="#menu">Ver menú</a></header>

      <section className="lia-hero" aria-labelledby="lia-title">
        <div className="lia-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><span>FOTO PÚBLICA DEL PUESTO · CONFIRMAR ATRIBUCIÓN</span></div>
        <div className="lia-hero-copy"><p className="lia-kicker">TACOS DE GUISADO · LAS BRISAS</p><h1 id="lia-title">El guiso<br /><em>va en tortilla.</em></h1><p>Una carta rápida para saber qué hay, cuánto cuesta y cómo llegar a Tacos Varios Lia.</p><div className="lia-hero-actions"><a className="lia-red-button" href="#menu">Escoger mi taco</a><a className="lia-line-link" href={mapUrl} target="_blank" rel="noreferrer">Llegar al puesto ↗</a></div><div className="lia-hero-meta"><span><b>$45</b> taco publicado</span><span><b>5.0</b> en Google Maps</span><span><b>08:00</b> abre según plataforma</span></div></div>
      </section>

      <section className="lia-service-strip" id="como" aria-label="Formas de compra"><div><b>01</b><span>Escoge el guiso</span><small>milanesa · chile relleno · chicharrón</small></div><div><b>02</b><span>Pregunta qué salió hoy</span><small>la disponibilidad cambia en el puesto</small></div><div><b>03</b><span>Come ahí o llévalo</span><small>Google Maps indica ambas opciones</small></div></section>

      <section className="lia-menu" id="menu" aria-labelledby="menu-title"><div className="lia-menu-intro"><p className="lia-kicker">CARTA PUBLICADA</p><h2 id="menu-title">Pide<br /><em>sin adivinar.</em></h2><p>Los nombres y precios salen del menú público de la plataforma de reparto. La landing puede convertirse en menú editable cuando el negocio confirme su carta.</p><a className="lia-red-button" href={mapUrl} target="_blank" rel="noreferrer">Ver ubicación</a></div><div className="lia-menu-board"><div className="lia-board-head"><span>TAQUITOS DE GUISADO</span><b>$45 c/u</b></div>{site.menuGroups.map((group) => <section className="lia-menu-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item.name}><span>{item.name}</span><b>{item.price}</b></li>)}</ul></section>)}<div className="lia-board-foot">Aguas del día · $50 · sodas disponibles · confirmar horario antes de salir</div></div></section>

      <section className="lia-photo-proof" aria-labelledby="photo-title"><div className="lia-photo-proof-copy"><p className="lia-kicker">FOTOS DE LA FICHA PÚBLICA</p><h2 id="photo-title">Así se ve<br /><em>lo que llega.</em></h2><p>Una foto del puesto y otra del taco publicado ayudan a que la persona reconozca el lugar y no se pierda al llegar.</p></div><div className="lia-photo-proof-grid">{site.gallery.slice(1).map((photo) => <figure key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" /><figcaption>{photo.caption}</figcaption></figure>)}</div></section>

      <section className="lia-review" id="reseñas" aria-labelledby="review-title"><div className="lia-review-score"><strong>{site.rating}</strong><span>★★★★★</span><small>{site.reviewCount} reseñas públicas en Google Maps</small></div><div className="lia-review-copy"><p className="lia-kicker">LO QUE DICEN</p><h2 id="review-title">Buen guiso,<br /><em>buena vuelta.</em></h2><blockquote>“{site.review}”</blockquote><small>Fragmento público consultado · confirmar texto y atribución antes de la entrega.</small></div></section>

      <section className="lia-visit" id="visita" aria-labelledby="visit-title"><div><p className="lia-kicker">ENCUÉNTRALO EN LAS BRISAS</p><h2 id="visit-title">La ruta<br /><em>está marcada.</em></h2><p>{site.address}</p><p className="lia-note">Consumo en el lugar y para llevar aparecen en la ficha pública. La zona de atención y el horario se confirman directamente con el negocio.</p><div className="lia-visit-links"><a className="lia-red-button" href={mapUrl} target="_blank" rel="noreferrer">Abrir ruta a pie ↗</a><a className="lia-line-link" href="#menu">Volver al menú ↑</a></div></div><MapCard /></section>

      <footer className="lia-footer"><Wordmark /><span>Fotos, menú y datos públicos consultados · confirmar marca, horario y autorización antes de publicar.</span><a href="#inicio">↑</a></footer>
    </main>
  );
}
