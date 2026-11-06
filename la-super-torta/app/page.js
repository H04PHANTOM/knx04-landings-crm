import { site } from './site-data';
import './globals.css';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(site.name + ', ' + site.address);
const phoneHref = 'tel:' + site.phone;

function Brand() {
  return <a className="torta-brand" href="#inicio" aria-label={'Inicio de ' + site.name}><span className="torta-brand-name">{site.name}</span><span className="torta-brand-note">{site.category}</span></a>;
}

function Photo({ src, alt, className = '' }) {
  return <img className={className} src={src} alt={alt} loading="lazy" />;
}

export const metadata = { title: site.name + ' · ' + site.category, description: site.intro };

export default function Page() {
  return (
    <main className="torta-site" id="inicio">
      <header className="torta-header">
        <Brand />
        <div className="torta-header-meta"><span>DESDE TEMPRANO</span><span>{site.hours.split(' según')[0]}</span></div>
        <a className="torta-header-action" href={phoneHref}>Llamar <b>↗</b></a>
      </header>

      <section className="torta-hero">
        <div className="torta-hero-copy"><span className="torta-eyebrow">LAS HUERTAS / PARA LLEVAR</span><h1>El desayuno<br /><em>que sí alcanza.</em></h1><p>{site.intro}</p><a className="torta-order" href="#menu">Armar mi pedido <span>↓</span></a><div className="torta-stats"><span><strong>231</strong> reseñas</span><span><strong>07:30</strong> apertura mostrada</span></div></div>
        <figure className="torta-hero-card"><Photo src={site.photos[0]} alt="Foto pública de La Super Torta" /><figcaption><span>LA SUPER TORTA</span><strong>comida para la ruta</strong></figcaption></figure>
      </section>

      <section className="torta-receipt-section" id="menu">
        <div className="torta-receipt">
          <div className="torta-receipt-head"><span>RECIBO DEL DÍA</span><span>LAS HUERTAS 4TA SECC</span></div><h2>Marca tu antojo.</h2><p className="torta-receipt-lede">El menú se puede convertir en una carta real con precios y fotos del local. Esta versión parte de lo que Google Maps sí deja comprobar.</p>
          <div className="torta-lines">{site.highlights.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><small>{index === 0 ? 'tema visible en reseñas' : 'sección sugerida · validar'}</small><a href={phoneHref}>Pedir ↗</a></div>)}</div>
          <div className="torta-receipt-total"><span>PARA LLEVAR / AQUÍ</span><strong>LISTO PARA DECIDIR</strong></div>
        </div>
        <div className="torta-side-photo"><Photo src={site.photos[1]} alt="Foto pública de comida de La Super Torta" /><span>01 / vista pública</span></div>
      </section>

      <section className="torta-gallery"><div className="torta-gallery-copy"><span className="torta-eyebrow">FOTOS QUE ABREN EL APETITO</span><h2>Primero se ve.<br />Luego se pide.</h2><p>La galería toma el lugar de la explicación larga: producto, fachada y una llamada clara.</p><a href={mapUrl} target="_blank" rel="noreferrer">Ver ficha en Maps ↗</a></div><div className="torta-gallery-grid"><Photo src={site.photos[2]} alt="Imagen pública de La Super Torta" /><Photo src={site.photos[3]} alt="Otra imagen pública de La Super Torta" /></div></section>

      <section className="torta-location"><div><span className="torta-eyebrow">PASA POR AQUÍ</span><h2>{site.name}</h2><p>{site.address}</p><small>{site.hours}</small></div><div className="torta-location-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Abrir Google Maps ↗</a><a href={phoneHref}>Llamar {site.phone.replace('+52','')} ↗</a></div></section>

      <footer className="torta-footer"><Brand /><span>{site.demoLabel}</span></footer>
    </main>
  );
}
