import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = `tel:${site.phone}`;

function Wordmark() {
  return <a className="pradera-wordmark" href="#inicio" aria-label={`Inicio de ${site.name}`}><span>PRADERA</span><strong>el café</strong><small>brunch · mesa · paseo</small></a>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return <main className="pradera-page" id="inicio">
    <header className="pradera-header shell"><Wordmark /><div className="pradera-open">HOY · ABRE 08:00</div><nav><a href="#ritmo">Tu ritmo</a><a href="#menu">Carta</a><a href="#visita">Visita</a></nav><a className="pradera-map" href={mapUrl} target="_blank" rel="noreferrer">Maps ↗</a></header>

    <section className="pradera-hero shell"><div className="pradera-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><span>Las Huertas 3era Secc.</span></div><div className="pradera-hero-copy"><p className="pradera-kicker">{site.category}</p><h1>Tu mesa,<br /><em>tu ritmo.</em></h1><p>{site.intro}</p><div className="pradera-hero-actions"><a className="pradera-primary" href="#ritmo">Elige tu plan <span>↓</span></a><a href={site.socialUrl} target="_blank" rel="noreferrer">Instagram ↗</a></div></div></section>

    <section className="pradera-pulse shell"><div><strong>{site.rating}</strong><span>Google Maps · {site.reviewCount} reseñas</span></div><div><strong>$100—200</strong><span>por persona</span></div><div><strong>08:00</strong><span>abre la mañana</span></div><div><strong>01</strong><span>pedido en línea visible</span></div></section>

    <section className="pradera-rhythm shell" id="ritmo"><div className="pradera-rhythm-head"><p className="pradera-kicker">01 / Elige tu ritmo</p><h2>Un lugar,<br /><em>tres maneras.</em></h2><p>La ficha pública confirma consumo en el lugar y pedidos desde el automóvil. La página lo convierte en caminos claros.</p></div><div className="pradera-rhythm-grid">{site.modes.map((mode, index) => <article key={mode.title} className={`pradera-mode mode-${index + 1}`}><span>0{index + 1}</span><h3>{mode.title}</h3><p>{mode.description}</p><a href={mode.href || mapUrl} target={mode.href ? '_blank' : '_blank'} rel="noreferrer">{mode.action} ↗</a></article>)}</div></section>

    <section className="pradera-menu shell" id="menu"><div className="pradera-menu-photo"><img src={site.gallery[1].src} alt={site.gallery[1].alt} /><span>Foto pública de la ficha</span></div><div className="pradera-menu-copy"><p className="pradera-kicker">02 / Carta y mesa</p><h2>Para quedarte<br /><em>otra ronda.</em></h2><p>{site.menuNote}</p><div className="pradera-menu-list">{site.menu.map((item) => <a href={phoneHref} key={item}><span>{item}</span><b>Preguntar ↗</b></a>)}</div></div></section>

    <section className="pradera-gallery shell"><div className="pradera-gallery-copy"><p className="pradera-kicker">03 / El espacio</p><h2>Un café que<br /><em>se siente verde.</em></h2><p>La fotografía pública muestra la entrada y el ambiente exterior. Antes de publicar una versión final, conviene confirmar qué espacios se pueden reservar.</p><a href={phoneHref}>Preguntar por reservaciones ↗</a></div><div className="pradera-gallery-photo"><img src={site.gallery[2].src} alt={site.gallery[2].alt} /></div></section>

    <section className="pradera-visit shell" id="visita"><div><p className="pradera-kicker">Encuentra la mesa</p><h2>{site.address}</h2><p>{site.hours}</p></div><div className="pradera-visit-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Abrir Google Maps ↗</a><a href={phoneHref}>664 155 3620 ↗</a></div></section>
    <footer className="pradera-footer shell"><Wordmark /><span>Nombre mostrado como texto hasta validar el logo oficial con el negocio.</span></footer>
  </main>;
}
