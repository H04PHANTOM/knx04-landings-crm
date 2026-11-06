import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const bookingUrl = site.website;

function Logo({ compact = false }) {
  return (
    <a className={`jr-logo ${compact ? 'jr-logo-compact' : ''}`} href="#inicio" aria-label={`Inicio de ${site.name}`}>
      <img src={site.logoUrl} alt={`Logo oficial de ${site.name}`} />
      <span><b>{site.name}</b><small>BARBERÍA · AGENDA</small></span>
    </a>
  );
}

function ArrowLink({ href, children, external = false, tone = 'gold' }) {
  return <a className={`jr-link jr-link-${tone}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}<span aria-hidden="true">↗</span></a>;
}

export const metadata = { title: site.name, description: site.intro };

export default function Page() {
  const serviceItems = [
    { label: site.highlights[0], note: 'Elige el estilo y llega con una idea clara.', mark: '01' },
    { label: site.highlights[1], note: 'Detalles que completan el servicio.', mark: '02' },
    { label: 'Agenda en línea', note: 'Revisa disponibilidad en el sitio oficial.', mark: '03' },
  ];

  return (
    <main className="jr-site" id="inicio">
      <div className="jr-utility">
        <span>Tijuana · Barbería JR</span>
        <span className="jr-utility-middle">Agenda pública disponible en el sitio oficial</span>
        <a href={bookingUrl} target="_blank" rel="noreferrer">Abrir agenda ↗</a>
      </div>

      <header className="jr-nav">
        <Logo />
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#ritual">La experiencia</a>
          <a href="#agenda">Agenda</a>
          <a href="#visitanos">Visítanos</a>
        </nav>
        <a className="jr-nav-button" href={bookingUrl} target="_blank" rel="noreferrer">Reservar cita</a>
      </header>

      <section className="jr-hero" aria-labelledby="hero-title">
        <div className="jr-hero-visual" style={{ backgroundImage: `url(${site.heroImage})` }}>
          <div className="jr-hero-shade" />
          <div className="jr-hero-mark"><img src={site.logoUrl} alt="" /><span>ESTILO<br />CON FIRMA</span></div>
          <span className="jr-hero-caption">Corte · barba · detalle</span>
        </div>
        <div className="jr-hero-copy">
          <p className="jr-overline">Barbería JR / 01</p>
          <h1 id="hero-title">Una cita.<br /><em>Un corte.</em><br />Tu firma.</h1>
          <p className="jr-hero-intro">{site.intro} Aquí el recorrido comienza con el servicio correcto y termina con un look que se siente tuyo.</p>
          <div className="jr-hero-actions">
            <a className="jr-primary" href={bookingUrl} target="_blank" rel="noreferrer">Elegir horario <span>→</span></a>
            <ArrowLink href="#servicios" tone="ink">Ver servicios</ArrowLink>
          </div>
          <div className="jr-proof-row"><span><b>01</b> Agenda oficial</span><span><b>02</b> Atención en local</span></div>
        </div>
      </section>

      <section className="jr-service-section" id="servicios" aria-labelledby="service-title">
        <div className="jr-section-intro">
          <p className="jr-overline">Elige tu momento</p>
          <h2 id="service-title">Lo esencial,<br /><em>bien hecho.</em></h2>
          <p>Si ya sabes qué quieres, entra directo a la agenda. Si todavía estás decidiendo, guarda esta guía y consúltala al llegar.</p>
          <ArrowLink href={bookingUrl} external>Consultar agenda oficial</ArrowLink>
        </div>
        <div className="jr-service-board">
          {serviceItems.map((item) => (
            <a className="jr-service-row" key={item.label} href={bookingUrl} target="_blank" rel="noreferrer">
              <span className="jr-service-num">{item.mark}</span>
              <span className="jr-service-name"><b>{item.label}</b><small>{item.note}</small></span>
              <span className="jr-service-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
          <div className="jr-service-note"><span>JR</span><p>La disponibilidad, horarios y detalles se consultan directamente en la agenda oficial.</p></div>
        </div>
      </section>

      <section className="jr-ritual" id="ritual" aria-labelledby="ritual-title">
        <div className="jr-ritual-copy">
          <p className="jr-overline">La experiencia</p>
          <h2 id="ritual-title">Llegas con una idea.<br /><em>Sales con tu estilo.</em></h2>
          <p>Una barbería se disfruta en el detalle: la conversación, la herramienta correcta y el tiempo para dejar el acabado en su punto.</p>
          <div className="jr-ritual-list"><span><b>01</b> Define tu servicio</span><span><b>02</b> Reserva tu horario</span><span><b>03</b> Llega al local</span></div>
        </div>
        <div className="jr-ritual-card"><img src={site.logoUrl} alt="Logo oficial de Barbería JR" /><span>J R</span><small>BARBERÍA JR · TIJUANA</small></div>
      </section>

      <section className="jr-booking" id="agenda" aria-labelledby="booking-title">
        <div><p className="jr-overline">Tu próxima visita</p><h2 id="booking-title">La agenda está<br /><em>en un solo lugar.</em></h2><p>Consulta disponibilidad, elige tu servicio y continúa en el sitio oficial de Barbería JR.</p></div>
        <div className="jr-booking-panel"><span className="jr-panel-index">03 / AGENDA</span><strong>Barbería JR</strong><span>Reservas en línea · sitio oficial</span><a className="jr-primary" href={bookingUrl} target="_blank" rel="noreferrer">Abrir agenda <span>→</span></a></div>
      </section>

      <section className="jr-visit" id="visitanos" aria-labelledby="visit-title">
        <div className="jr-visit-copy"><p className="jr-overline">Visítanos</p><h2 id="visit-title">Tijuana,<br /><em>nos vemos en la silla.</em></h2><p>{site.address}. La ubicación exacta y los horarios se confirman en la agenda oficial antes de salir.</p><ArrowLink href={mapUrl} external>Cómo llegar en Google Maps</ArrowLink><small className="jr-disclaimer">Información pública consultada; confirmar datos directamente con el local.</small></div>
        <div className="jr-map-card" aria-label="Mapa de referencia de Barbería JR"><div className="jr-map-grid" /><span className="jr-map-pin">JR</span><span className="jr-map-label">Tijuana · Barbería JR</span><span className="jr-map-road road-one" /><span className="jr-map-road road-two" /></div>
      </section>

      <footer className="jr-footer"><Logo compact /><div className="jr-footer-links"><a href="#servicios">Servicios</a><a href={bookingUrl} target="_blank" rel="noreferrer">Agenda oficial</a><a href={mapUrl} target="_blank" rel="noreferrer">Mapa</a></div><span>© Barbería JR</span></footer>
    </main>
  );
}
