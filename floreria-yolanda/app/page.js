import { site } from './site-data';
import './globals.css';

const mapUrl = 'https://www.google.com.mx/maps/place/FLORERIA+Yolanda/@32.4942354,-116.9591317,787m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80d9386b78e448db:0xd4d9771108f3b781!8m2!3d32.4942354!4d-116.9591317!16s%2Fg%2F1wfvmylt?entry=ttu';
const phoneHref = `tel:${site.phone}`;

export const metadata = { title: site.name, description: site.intro };

function Mark() {
  return <a className="yolanda-mark" href="#inicio" aria-label={`Inicio de ${site.name}`}><strong>FLORERÍA</strong><b>Yolanda</b><small>flores · regalos · entrega</small></a>;
}

function ArrowLink({ href, children, external = false, className = '' }) {
  return <a className={`yolanda-link ${className}`.trim()} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{children}<span aria-hidden="true">↗</span></a>;
}

export default function Page() {
  return (
    <main className="yolanda-site" id="inicio">
      <header className="yolanda-header"><Mark /><nav aria-label="Navegación principal"><a href="#catalogo">Catálogo</a><a href="#ocasiones">Ocasiones</a><a href="#pedido">Cómo pedir</a><a href="#visita">Visítanos</a></nav><a className="yolanda-call" href={phoneHref}>664 686 0334</a></header>

      <section className="yolanda-hero" aria-labelledby="yolanda-title"><div className="yolanda-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><div><span>FOTO PÚBLICA · LAS HUERTAS</span><b>Un detalle que<br />sí llega.</b><small>Confirmar atribución antes de publicar</small></div></div><div className="yolanda-hero-copy"><p className="yolanda-kicker">FLORERÍA LOCAL · TIJUANA</p><h1 id="yolanda-title">Flores para<br /><em>decirlo bonito.</em></h1><p>Una vitrina rápida para elegir una ocasión, consultar disponibilidad y llegar al local sin perder la dirección.</p><div className="yolanda-hero-actions"><a className="yolanda-primary" href="#catalogo">Ver arreglos</a><ArrowLink href={mapUrl} external>Cómo llegar</ArrowLink></div><div className="yolanda-hero-facts"><span><b>4.0</b> 23 reseñas públicas</span><span><b>10–19 h</b> lun–sáb</span><span><b>Local 1</b> Las Huertas 4ta Secc.</span></div></div></section>

      <section className="yolanda-occasion-strip" id="ocasiones" aria-label="Ocasiones para pedir flores">{site.occasions.map((occasion, index) => <a key={occasion.title} href="#catalogo"><span>0{index + 1}</span><b>{occasion.title}</b><small>{occasion.detail}</small></a>)}</section>

      <section className="yolanda-catalog" id="catalogo" aria-labelledby="catalog-title"><div className="yolanda-catalog-head"><div><p className="yolanda-kicker">FOTOS DE LA FICHA PÚBLICA</p><h2 id="catalog-title">Mira el arreglo<br /><em>antes de llamar.</em></h2></div><p>La disponibilidad se confirma por teléfono. Estas imágenes son referencia pública del trabajo que aparece en la ficha del negocio.</p></div><div className="yolanda-catalog-grid">{site.gallery.slice(1).map((photo, index) => <figure key={photo.src} className={`yolanda-product product-${index + 1}`}><img src={photo.src} alt={photo.alt} loading="lazy" /><figcaption><span>0{index + 1}</span><div><b>{photo.title}</b><small>{photo.caption}</small></div><ArrowLink href={phoneHref}>Consultar</ArrowLink></figcaption></figure>)}</div></section>

      <section className="yolanda-order" id="pedido" aria-labelledby="order-title"><div className="yolanda-order-lead"><p className="yolanda-kicker">PEDIDO LOCAL</p><h2 id="order-title">Tres pasos,<br /><em>un gesto.</em></h2><p>La ficha pública indica servicio a domicilio y atención en el local. El canal final se confirma directamente con la florería.</p><ArrowLink href={phoneHref}>Llamar para disponibilidad</ArrowLink></div><ol className="yolanda-order-list"><li><span>01</span><div><b>Elige la ocasión</b><small>cumpleaños, aniversario, condolencia o “porque sí”.</small></div></li><li><span>02</span><div><b>Pregunta por el día</b><small>flores, color, tamaño y recipiente disponibles.</small></div></li><li><span>03</span><div><b>Recíbelo o pasa por él</b><small>la ficha pública menciona entrega a domicilio.</small></div></li></ol></section>

      <section className="yolanda-reviews" aria-labelledby="reviews-title"><div><p className="yolanda-kicker">LO QUE YA DICEN</p><h2 id="reviews-title">La gente<br /><em>sí vuelve.</em></h2><ArrowLink href={mapUrl} external>Ver reseñas en Google Maps</ArrowLink></div><div className="yolanda-review-wall">{site.reviews.map((review) => <blockquote key={review.text}><span>“</span><p>{review.text}</p><footer>{review.meta}</footer></blockquote>)}</div></section>

      <section className="yolanda-visit" id="visita" aria-labelledby="visit-title"><div><p className="yolanda-kicker">PASA POR EL LOCAL</p><h2 id="visit-title">Florería<br /><em>Yolanda.</em></h2><p>{site.address}</p><small>{site.hours}</small><div className="yolanda-visit-links"><ArrowLink href={mapUrl} external className="yolanda-map-button">Abrir Google Maps</ArrowLink><ArrowLink href={phoneHref}>Llamar</ArrowLink></div></div><a className="yolanda-map" href={mapUrl} target="_blank" rel="noreferrer" aria-label="Abrir la ubicación de Florería Yolanda en Google Maps"><span className="map-road road-a" /><span className="map-road road-b" /><span className="map-pin" /><div><b>Blvd. Gustavo Díaz Ordaz · Local 1</b><span>Las Huertas 4ta Secc.</span><small>Ver ruta ↗</small></div></a></section>

      <footer className="yolanda-footer"><Mark /><span>Fotos y datos públicos consultados para esta vista; confirmar logo oficial, catálogo y autorización antes de la entrega.</span><a href="#inicio">↑</a></footer>
    </main>
  );
}
