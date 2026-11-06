import { site } from './site-data';
import './globals.css';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(site.name + ', ' + site.address);
const phoneHref = 'tel:' + site.phone;

function Brand() {
  return <a className="jalisco-brand" href="#inicio" aria-label={'Inicio de ' + site.name}><span>{site.name}</span><small>{site.category}</small></a>;
}

function Photo({ src, alt, className = '' }) {
  return <img className={className} src={src} alt={alt} loading="lazy" />;
}

export const metadata = { title: site.name + ' · ' + site.category, description: site.intro };

export default function Page() {
  return (
    <main className="jalisco-site" id="inicio">
      <header className="jalisco-header"><Brand /><div className="jalisco-open"><i /> abierto por la noche</div><a className="jalisco-header-cta" href="#carta">Ver carta <b>↘</b></a></header>

      <section className="jalisco-hero"><div className="jalisco-hero-copy"><p className="jalisco-kicker">TIJUANA / HUERTAS 2DA SECC</p><h1>Que la noche<br /><em>sepa a Jalisco.</em></h1><p>{site.intro}</p><div className="jalisco-hero-actions"><a className="jalisco-hot" href="#carta">Ver el antojo ↓</a><a className="jalisco-map" href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar ↗</a></div><div className="jalisco-proof"><span><b>{site.rating}</b> / {site.reviewCount} reseñas</span><span>{site.price}</span></div></div><figure className="jalisco-hero-photo"><Photo src={site.photos[0]} alt="Foto pública de Tacos Jalisco" /><figcaption><span>01</span><strong>Tacos Jalisco</strong><small>la barra abre de nuevo por la tarde</small></figcaption></figure></section>

      <section className="jalisco-signal"><span>PASTOR</span><span>SUADERO</span><span>ADOBADA</span><span>MICHELADA</span><span>PARA LLEVAR</span></section>

      <section className="jalisco-menu-section" id="carta"><div className="jalisco-menu-heading"><p className="jalisco-kicker">01 / CARTA DE NOCHE</p><h2>El antojo está aquí.</h2><p>Una carta corta primero; el menú completo se puede sumar cuando el negocio confirme precios y fotos propias.</p></div><div className="jalisco-menu">{site.highlights.map((item, index) => <article key={item}><span className="jalisco-num">0{index + 1}</span><div><h3>{item}</h3><p>{index === 0 ? 'Destacado visible en la ficha pública.' : index === 1 ? 'Foto y nombre presentes en la carta pública.' : 'Tema recurrente en reseñas.'}</p></div><a href={phoneHref}>Pedir ↗</a></article>)}</div></section>

      <section className="jalisco-visuals"><div className="jalisco-visual-tall"><Photo src={site.photos[1]} alt="Foto pública de tacos de Tacos Jalisco" /><span>02 / taco y barra</span></div><div className="jalisco-visual-copy"><p className="jalisco-kicker">LO QUE DICEN</p><blockquote>“Muy sabrosos y te atienden muy rápido.”</blockquote><p>La ficha pública muestra 379 reseñas y conversaciones sobre tacos ricos, adobada y servicio. La página lo pone junto al botón de llegada.</p><a href={mapUrl} target="_blank" rel="noreferrer">Leer la ficha pública ↗</a></div><div className="jalisco-visual-small"><Photo src={site.photos[2]} alt="Foto pública de Tacos Jalisco" /><span>03 / ambiente</span></div></section>

      <section className="jalisco-route"><div><p className="jalisco-kicker">02 / LLEGA SIN RODEOS</p><h2>{site.address}</h2><p>{site.hours}</p><small>Consumo en el lugar · Para llevar · Sin entrega a domicilio según la ficha.</small></div><div className="jalisco-route-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Abrir Maps ↗</a><a href={phoneHref}>Llamar {site.phone.replace('+52','')} ↗</a></div></section>

      <footer className="jalisco-footer"><Brand /><span>{site.demoLabel}</span></footer>
    </main>
  );
}
