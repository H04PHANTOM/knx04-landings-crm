import { site } from './site-data';
import './globals.css';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${site.name}, ${site.address}`);

export const metadata = { title: site.name, description: site.intro };

function Crest() {
  return <a className="cremina-crest" href="#inicio" aria-label={`Inicio de ${site.name}`}><strong>CREMINA</strong><small>bistro · café</small></a>;
}

function RouteLink({ children, className = '' }) {
  return <a className={`cremina-route-link ${className}`.trim()} href={mapUrl} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

function Stat({ value, label }) {
  return <div className="cremina-stat"><strong>{value}</strong><span>{label}</span></div>;
}

export default function Page() {
  return (
    <main className="cremina-site" id="inicio">
      <header className="cremina-header">
        <Crest />
        <nav aria-label="Navegación principal"><a href="#carta">Carta</a><a href="#fotos">Fotos</a><a href="#resenas">Reseñas</a><a href="#visita">Visítanos</a></nav>
        <RouteLink>Cómo llegar</RouteLink>
      </header>

      <section className="cremina-hero" aria-labelledby="cremina-title">
        <div className="cremina-hero-photo">
          <img src={site.gallery[0].src} alt={site.gallery[0].alt} />
          <div className="cremina-photo-tag"><span>FOTO PÚBLICA</span><b>El comedor de Cremina</b><small>verificar atribución al aprobar la publicación</small></div>
        </div>
        <div className="cremina-hero-copy">
          <p className="cremina-kicker">DESAYUNOS · CAFÉ · COMIDA</p>
          <h1 id="cremina-title">Un lugar<br /><em>para quedarte.</em></h1>
          <p className="cremina-hero-lede">La mesa, el menú y la ruta juntos. Cremina está dentro de Plaza Las Brisas, con desayunos, comida y café para quedarse o pedir para llevar.</p>
          <div className="cremina-hero-actions"><a className="cremina-primary" href="#carta">Ver la carta</a><RouteLink>Ir a Plaza Las Brisas</RouteLink></div>
          <div className="cremina-stats"><Stat value={site.rating} label={`${site.reviewCount} reseñas en Google`} /><Stat value={site.priceRange} label="por persona" /><Stat value="L42" label="Plaza Las Brisas" /></div>
        </div>
      </section>

      <section className="cremina-quickbar" aria-label="Servicios confirmados en la ficha pública"><span>CONSUMO EN EL LUGAR</span><span>PARA LLEVAR</span><span>DESAYUNO Y BRUNCH</span><span>TARJETAS DE CRÉDITO</span></section>

      <section className="cremina-menu" id="carta" aria-labelledby="menu-title">
        <div className="cremina-menu-intro"><p className="cremina-kicker">CARTA VISIBLE</p><h2 id="menu-title">Pide algo<br /><em>que se antoje.</em></h2><p>Estos nombres y precios se leen en la carta fotografiada por visitantes. La disponibilidad puede cambiar; la landing deja la decisión a un clic de distancia.</p><RouteLink>Ver ubicación</RouteLink></div>
        <div className="cremina-menu-board">
          <div className="cremina-menu-board-head"><span>PARA EMPEZAR EL DÍA</span><i>MENÚ PÚBLICO</i></div>
          <div className="cremina-menu-items">{site.menuItems.map((item) => <article key={item.name}><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.price}</strong></article>)}</div>
          <div className="cremina-menu-note">Pregunta por la carta completa en el local · precios sujetos a confirmación</div>
        </div>
      </section>

      <section className="cremina-photo-story" id="fotos" aria-labelledby="photos-title">
        <div className="cremina-photo-story-head"><p className="cremina-kicker">FOTOS DE GOOGLE MAPS</p><h2 id="photos-title">Así se ve<br /><em>la visita.</em></h2><p>Interior, bebida, plato y carta. La galería usa material público del perfil del negocio para que la persona sepa qué esperar antes de llegar.</p></div>
        <div className="cremina-photo-grid">{site.gallery.slice(1).map((photo, index) => <figure key={photo.src} className={`cremina-photo-card photo-card-${index + 1}`}><img src={photo.src} alt={photo.alt} loading="lazy" /><figcaption><b>{photo.label}</b><span>{photo.caption}</span></figcaption></figure>)}</div>
      </section>

      <section className="cremina-reviews" id="resenas" aria-labelledby="reviews-title">
        <div className="cremina-review-lead"><p className="cremina-kicker">LO QUE DICE LA GENTE</p><h2 id="reviews-title">183 visitas<br /><em>que dejaron huella.</em></h2><div className="cremina-rating"><strong>{site.rating}</strong><span>★★★★★</span><small>Google Maps · ficha consultada</small></div></div>
        <div className="cremina-review-list">{site.reviews.map((review) => <blockquote key={review.text}><p>“{review.text}”</p><footer>{review.meta}</footer></blockquote>)}</div>
      </section>

      <section className="cremina-visit" id="visita" aria-labelledby="visit-title"><div className="cremina-visit-copy"><p className="cremina-kicker">ENCUÉNTRALO EN LAS BRISAS</p><h2 id="visit-title">La mesa<br /><em>está aquí.</em></h2><p>{site.address}</p><p className="cremina-hours">{site.hours}</p><div className="cremina-visit-actions"><RouteLink className="cremina-route-button">Abrir Google Maps</RouteLink><a className="cremina-text-link" href="#carta">Volver a la carta ↑</a></div></div><a className="cremina-map" href={mapUrl} target="_blank" rel="noreferrer" aria-label="Abrir Cremina Bistro Café en Google Maps"><span className="cremina-map-road map-road-one" /><span className="cremina-map-road map-road-two" /><span className="cremina-map-pin" /><div><b>Cremina Bistro & Café</b><span>Plaza Las Brisas · L42</span><small>Cómo llegar ↗</small></div></a></section>

      <footer className="cremina-footer"><Crest /><span>Fotos y datos públicos consultados para esta vista; confirmar logo, carta, redes y autorización antes de la entrega.</span><a href="#inicio">↑</a></footer>
    </main>
  );
}
