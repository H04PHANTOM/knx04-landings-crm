import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = `tel:${site.phone}`;

function Wordmark() {
  return <a className="blue-wordmark" href="#inicio" aria-label={`Inicio de ${site.name}`}><span>BLUE</span><strong>BARBER</strong><small>Plaza Jalisco · Tijuana</small></a>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return <main className="blue-page" id="inicio">
    <header className="blue-header shell"><Wordmark /><div className="blue-rating"><strong>{site.rating}</strong><span>★ · {site.reviewCount} reseñas</span></div><nav><a href="#servicios">Servicios</a><a href="#trabajos">Trabajos</a><a href="#visita">Visita</a></nav><a className="blue-social" href={site.socialUrl} target="_blank" rel="noreferrer">Facebook ↗</a></header>

    <section className="blue-hero shell"><div className="blue-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><span>Foto pública del negocio</span></div><div className="blue-hero-copy"><p className="blue-kicker">{site.category}</p><h1>Tu estilo<br /><em>tiene forma.</em></h1><p>{site.intro}</p><div className="blue-hero-actions"><a className="blue-primary" href="#servicios">Ver servicios <span>↓</span></a><a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar ↗</a></div></div></section>

    <section className="blue-strip shell"><div><strong>4.5</strong><span>Google Maps</span></div><div><strong>119</strong><span>reseñas públicas</span></div><div><strong>10:00</strong><span>abre la jornada</span></div><div><strong>664</strong><span>857 6560</span></div></section>

    <section className="blue-services shell" id="servicios"><div className="blue-section-head"><p className="blue-kicker">01 / La silla</p><h2>Elige el<br /><em>servicio.</em></h2><p>La ficha pública muestra cortes, degradados, diseños y agenda por WhatsApp. Esta página los ordena para decidir antes de llegar.</p></div><div className="blue-service-list">{site.services.map((service, index) => <article key={service}><span>0{index + 1}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><a href={phoneHref}>Preguntar ↗</a></article>)}</div></section>

    <section className="blue-work shell" id="trabajos"><div className="blue-work-copy"><p className="blue-kicker">02 / Referencias</p><h2>El acabado se<br /><em>ve de cerca.</em></h2><p>{site.reviewSummary}</p><a href={site.mapsProfile} target="_blank" rel="noreferrer">Ver fotos y reseñas en Maps ↗</a></div><div className="blue-work-grid"><figure><img src={site.gallery[1].src} alt={site.gallery[1].alt} /><figcaption>Trabajo publicado</figcaption></figure><figure><img src={site.gallery[2].src} alt={site.gallery[2].alt} /><figcaption>Ambiente de la barbería</figcaption></figure></div></section>

    <section className="blue-visit shell" id="visita"><div><p className="blue-kicker">03 / Encuéntrala</p><h2>{site.address}</h2><p>{site.hours}</p></div><div className="blue-visit-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Google Maps ↗</a><a href={phoneHref}>664 857 6560 ↗</a></div></section>
    <footer className="blue-footer shell"><Wordmark /><span>Nombre mostrado como texto hasta validar el logo oficial con el negocio.</span></footer>
  </main>;
}
