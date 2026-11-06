import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = `tel:${site.phone}`;

function Wordmark() {
  return <a className="pollo-wordmark" href="#inicio" aria-label={`Inicio de ${site.name}`}><span>POLLOS</span><strong>LÓPEZ</strong><small>rostizados · para llevar</small></a>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return <main className="pollo-page" id="inicio">
    <header className="pollo-header shell"><Wordmark /><div className="pollo-head-note">ABIERTO DESDE LAS 10:00</div><nav><a href="#menu">Menú</a><a href="#pasos">Cómo pedir</a><a href="#ubicacion">Ubicación</a></nav><a className="pollo-call" href={phoneHref}>Llamar ↗</a></header>

    <section className="pollo-hero shell"><div className="pollo-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><span>Local de Blvd. Díaz Ordaz</span></div><div className="pollo-hero-copy"><p className="pollo-kicker">{site.category}</p><h1>Pollo caliente.<br /><em>Mesa resuelta.</em></h1><p>{site.intro}</p><div className="pollo-hero-actions"><a className="pollo-primary" href="#menu">Armar pedido <span>↓</span></a><a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar ↗</a></div></div></section>

    <section className="pollo-score shell"><div><strong>{site.rating}</strong><span>Google Maps · {site.reviewCount} reseñas</span></div><div><strong>$100—200</strong><span>por persona, según ficha</span></div><div><strong>LOCAL</strong><span>consumo y para llevar</span></div><div><strong>664</strong><span>103 6864</span></div></section>

    <section className="pollo-menu shell" id="menu"><div className="pollo-menu-head"><p className="pollo-kicker">01 / Arma la mesa</p><h2>¿Para cuántos<br /><em>alcanza?</em></h2><p>La carta está pensada como decisión rápida: primero el tamaño, luego los extras.</p></div><div className="pollo-menu-list">{site.menu.map((item, index) => <article key={item.title}><div className="pollo-menu-number">0{index + 1}</div><div><h3>{item.title}</h3><p>{item.description}</p><span>{item.detail}</span></div><a href={phoneHref}>Preguntar ↗</a></article>)}</div></section>

    <section className="pollo-photo-strip shell"><div className="pollo-photo-card"><img src={site.gallery[1].src} alt={site.gallery[1].alt} /><span>Fotos públicas de la ficha</span></div><div className="pollo-photo-card"><img src={site.gallery[2].src} alt={site.gallery[2].alt} /><span>Producto y ambiente</span></div><div className="pollo-photo-message"><p className="pollo-kicker">02 / Lo que cuentan</p><h2>Rápido, caliente y con tortillas frescas.</h2><p>{site.reviewSummary}</p><a href={site.mapsProfile} target="_blank" rel="noreferrer">Leer reseñas en Maps ↗</a></div></section>

    <section className="pollo-steps shell" id="pasos"><div className="pollo-step-intro"><p className="pollo-kicker">03 / Cómo pedir</p><h2>Listo para la<br /><em>hora de comer.</em></h2></div><div className="pollo-step-grid">{site.steps.map((step, index) => <div key={step}><b>0{index + 1}</b><span>{step}</span></div>)}</div></section>

    <section className="pollo-location shell" id="ubicacion"><div><p className="pollo-kicker">Pasa por tu pedido</p><h2>{site.address}</h2><p>{site.hours}</p></div><div className="pollo-location-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Google Maps ↗</a><a href={phoneHref}>664 103 6864 ↗</a></div></section>
    <footer className="pollo-footer shell"><Wordmark /><span>Nombre mostrado como texto hasta validar el logo oficial con el negocio.</span></footer>
  </main>;
}
