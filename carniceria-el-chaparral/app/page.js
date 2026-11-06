import { site } from './site-data';
import './globals.css';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(site.name + ', ' + site.address);
const phoneHref = 'tel:' + site.phone;

function Brand() {
  return (
    <a className="chap-brand" href="#inicio" aria-label={'Inicio de ' + site.name}>
      <span className="chap-wordmark">{site.name}</span>
      <span className="chap-submark">{site.category}</span>
    </a>
  );
}

function Photo({ src, alt, className = '' }) {
  return <img className={className} src={src} alt={alt} loading="lazy" />;
}

export const metadata = {
  title: site.name + ' · ' + site.category,
  description: site.intro
};

export default function Page() {
  return (
    <main className="chap-site" id="inicio">
      <header className="chap-top">
        <Brand />
        <nav aria-label="Navegación principal">
          <a href="#cortes">Mostrador</a>
          <a href="#comentarios">Comentarios</a>
          <a href="#visita">Visita</a>
        </nav>
        <a className="chap-call" href={phoneHref}>Llamar <span>↗</span></a>
      </header>

      <section className="chap-hero">
        <div className="chap-hero-copy">
          <p className="chap-kicker">CARNICERÍA LOCAL / TIJUANA</p>
          <h1>Lo bueno empieza en el mostrador.</h1>
          <p className="chap-lede">{site.intro}</p>
          <div className="chap-actions">
            <a className="chap-primary" href="#cortes">Ver el mostrador <span>↓</span></a>
            <a className="chap-secondary" href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar ↗</a>
          </div>
          <div className="chap-proof"><span>31 reseñas públicas</span><span>Guanábana 6701</span></div>
        </div>
        <figure className="chap-hero-photo">
          <Photo src={site.photos[0]} alt="Fachada pública de Carnicería El Chaparral" />
          <figcaption><span>01</span><strong>El Chaparral</strong><small>cortes para la comida de hoy</small></figcaption>
        </figure>
      </section>

      <section className="chap-strip" aria-label="Propuesta de la página"><span>FRESCO</span><span>PARA LLEVAR</span><span>DE BARRIO</span><span>PARA LA PARRILLA</span></section>

      <section className="chap-display" id="cortes">
        <div className="chap-section-intro"><p className="chap-kicker">EL MOSTRADOR</p><h2>Lo que la ficha pública deja ver.</h2><p>Una carta visual para que el cliente pregunte por corte, peso y disponibilidad sin hacer una llamada a ciegas.</p></div>
        <div className="chap-product-grid">
          {site.highlights.map((item, index) => (
            <article className={'chap-product chap-product-' + (index + 1)} key={item}>
              {site.photos[index + 1] && <Photo src={site.photos[index + 1]} alt={item + ' en ' + site.name} />}
              <div className="chap-product-copy"><span>0{index + 1}</span><h3>{item}</h3><p>{index === 0 ? 'Para la comida del día.' : index === 1 ? 'Crujiente, listo para compartir.' : 'Pregunta por existencia y presentación.'}</p><a href={phoneHref}>Consultar ↗</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="chap-note"><div className="chap-note-mark">CH</div><blockquote>“Carne de buena calidad y fresca.”</blockquote><p>Uno de los comentarios visibles en la ficha pública. La página convierte esa señal en una invitación a visitar el mostrador.</p></section>

      <section className="chap-reviews" id="comentarios">
        <div className="chap-section-intro"><p className="chap-kicker">LO QUE CUENTA LA GENTE</p><h2>Una reputación que sí cabe en la página.</h2></div>
        <div className="chap-review-list">{site.reviews.map((review, index) => <article key={review}><span>0{index + 1}</span><p>{review}</p></article>)}</div>
      </section>

      <section className="chap-visit" id="visita">
        <div className="chap-visit-copy"><p className="chap-kicker">PASA POR EL MOSTRADOR</p><h2>{site.name}</h2><p>{site.address}</p><small>{site.hours}</small></div>
        <div className="chap-visit-card"><strong>¿Ya vas?</strong><p>Abre la ruta o llama para confirmar disponibilidad antes de salir.</p><div><a href={mapUrl} target="_blank" rel="noreferrer">Abrir Maps ↗</a><a href={phoneHref}>Llamar ↗</a></div></div>
      </section>

      <footer className="chap-footer"><Brand /><span>{site.demoLabel}</span></footer>
    </main>
  );
}
