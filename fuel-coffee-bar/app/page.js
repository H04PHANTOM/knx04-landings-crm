import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = `tel:${site.phone}`;

function FuelMark() {
  return <a className="fuel-mark" href="#top" aria-label={`Inicio de ${site.name}`}><b>FUEL<br /><i>coffee bar</i></b></a>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return <main className="fuel-page" id="top">
    <header className="fuel-header shell"><FuelMark /><nav><a href="#carta">Carta</a><a href="#espacio">El espacio</a><a href="#visita">Visítanos</a></nav><div className="fuel-header-actions"><a href={site.socialUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a className="fuel-call" href={phoneHref}>Llamar</a></div></header>

    <section className="fuel-hero shell"><div className="fuel-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><span>Segundo piso · Lilias</span></div><div className="fuel-hero-copy"><p className="fuel-kicker">{site.category}</p><h1>Café para<br /><em>quedarte.</em></h1><p>{site.intro}</p><div className="fuel-hero-links"><a href="#carta" className="fuel-primary">Ver carta <span>↓</span></a><a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar ↗</a></div></div></section>

    <section className="fuel-facts shell"><div><strong>{site.rating}</strong><span>Google Maps · {site.reviewCount} reseñas</span></div><div><strong>07—21</strong><span>Lunes a viernes</span></div><div><strong>09—20:30</strong><span>Fin de semana</span></div><div><strong>01</strong><span>piso arriba de Oxxo</span></div></section>

    <section className="fuel-menu shell" id="carta"><div className="fuel-menu-intro"><p className="fuel-kicker">Carta pública</p><h2>Una barra<br /><em>sin prisa.</em></h2><p>Precios observados en el menú público; confirma disponibilidad y cambios directamente con el local.</p></div><div className="fuel-price-list">{site.menu.map((item) => <article key={item.name}><div><span>{item.type}</span><h3>{item.name}</h3><p>{item.note}</p></div><strong>{item.price}</strong></article>)}</div></section>

    <section className="fuel-space shell" id="espacio"><div className="fuel-space-photo"><img src={site.gallery[1].src} alt={site.gallery[1].alt} /><span>Un espacio para trabajar o bajar el ritmo</span></div><div className="fuel-space-copy"><p className="fuel-kicker">El espacio</p><h2>Tu reunión también puede tener buena barra.</h2><p>{site.eventNote}</p><a href={phoneHref}>Preguntar por eventos ↗</a></div></section>

    <section className="fuel-visit shell" id="visita"><div><p className="fuel-kicker">Encuéntralo</p><h2>{site.address}</h2><p>{site.hours}</p></div><div className="fuel-visit-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Abrir Google Maps ↗</a><a href={site.socialUrl} target="_blank" rel="noreferrer">Ver Instagram ↗</a></div></section>
    <footer className="fuel-footer shell"><FuelMark /><span>Contenido basado en fichas públicas; validar carta, horario y datos finales antes de entregar.</span></footer>
  </main>;
}
