import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = `tel:${site.phone}`;

function Mark() {
  return <a className="cang-mark" href="#inicio" aria-label={`Inicio de ${site.name}`}><span>MAREA</span><strong>LOS CANGREJOS</strong><small>mariscos · la mesa</small></a>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return <main className="cang-page" id="inicio">
    <header className="cang-header frame"><Mark /><div className="cang-meta"><span>BLVD. DÍAZ ORDAZ</span><strong>10:00 — 20:00</strong></div><nav><a href="#carta">Carta</a><a href="#fotos">Fotos</a><a href="#visita">Ruta</a></nav><a className="cang-call" href={phoneHref}>Llamar ↗</a></header>

    <section className="cang-hero frame"><div className="cang-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><span>Foto pública · Infonavit La Mesa</span></div><div className="cang-hero-copy"><p className="cang-kicker">Mariscos · restaurante local</p><h1>El mar<br /><em>se comparte.</em></h1><p>{site.intro}</p><div className="cang-actions"><a className="cang-primary" href="#carta">Arma tu orden <span>↓</span></a><a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar ↗</a></div></div></section>

    <section className="cang-proof frame"><div><strong>637</strong><span>reseñas públicas</span></div><div><strong>44</strong><span>menciones de tacos</span></div><div><strong>19</strong><span>menciones de estacionamiento</span></div><div><strong>664</strong><span>154 3019</span></div></section>

    <section className="cang-carta frame" id="carta"><div className="cang-carta-head"><p className="cang-kicker">01 / Pide al centro</p><h2>Una carta<br /><em>para mojar.</em></h2><p>La ficha pública destaca tacos, camarón, ceviches y aguachiles. Confirma precios y disponibilidad antes de publicar.</p></div><div className="cang-carta-list">{site.dishes.map((dish, index) => <article key={dish.title}><span>0{index + 1}</span><div><h3>{dish.title}</h3><p>{dish.description}</p></div><a href={phoneHref}>Preguntar ↗</a></article>)}</div></section>

    <section className="cang-fotos frame" id="fotos"><div className="cang-fotos-grid"><figure><img src={site.gallery[1].src} alt={site.gallery[1].alt} /><figcaption>Foto pública de platillo</figcaption></figure><figure><img src={site.gallery[2].src} alt={site.gallery[2].alt} /><figcaption>Foto pública de la ficha</figcaption></figure><figure><img src={site.gallery[3].src} alt={site.gallery[3].alt} /><figcaption>Foto publicada por clientes</figcaption></figure></div><div className="cang-fotos-copy"><p className="cang-kicker">02 / Lo que dicen</p><h2>Rico, rápido<br /><em>y abundante.</em></h2><p>{site.reviewSummary}</p><a href={site.mapsProfile} target="_blank" rel="noreferrer">Leer reseñas y ver más fotos ↗</a></div></section>

    <section className="cang-visit frame" id="visita"><div><p className="cang-kicker">03 / Encuentra la marea</p><h2>{site.address}</h2><p>{site.hours}</p><p className="cang-note">La ficha pública muestra consumo en el lugar, para llevar y entrega; confirma cobertura en llamada.</p></div><div className="cang-visit-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Google Maps ↗</a><a href={phoneHref}>664 154 3019 ↗</a></div></section>
    <footer className="cang-footer frame"><Mark /><span>Nombre mostrado como texto hasta validar el logo oficial con el negocio.</span></footer>
  </main>;
}
