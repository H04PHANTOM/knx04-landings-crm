import { site } from './site-data';
import './globals.css';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${site.name}, ${site.address}`);

export const metadata = { title: site.name, description: site.intro };

function Crest() {
  return <a className="cremina-crest" href="#inicio" aria-label={`Inicio de ${site.name}`}><strong>CREMINA</strong><small>bistro · café</small></a>;
}

function RouteLink({ children }) {
  return <a className="cremina-route-link" href={mapUrl} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

export default function Page() {
  return (
    <main className="cremina-site" id="inicio">
      <header className="cremina-header"><Crest /><nav aria-label="Navegación principal"><a href="#carta">Carta</a><a href="#ritmos">Ritmos del día</a><a href="#espacio">El espacio</a><a href="#visita">Visítanos</a></nav><span className="cremina-status">PLAZA LAS BRISAS · L42</span></header>

      <section className="cremina-opening" aria-labelledby="cremina-title"><div className="cremina-opening-copy"><p className="cremina-overline">CAFÉ · DESAYUNOS · COMIDA</p><h1 id="cremina-title">Una mesa para<br /><em>quedarte.</em></h1><p>{site.intro}</p><div className="cremina-opening-actions"><a className="cremina-ink-button" href="#carta">Abrir la carta</a><RouteLink>Cómo llegar al local</RouteLink></div></div><div className="cremina-analog" aria-label="Composición visual de una mesa de café"><div className="cremina-clock"><span>07</span><i>:</i><span>00</span><small>abre la mañana</small></div><div className="cremina-saucer" /><div className="cremina-cup" /><span className="cremina-table-label">L42 / PLAZA LAS BRISAS</span></div></section>

      <section className="cremina-dayparts" id="ritmos" aria-labelledby="dayparts-title"><div className="cremina-day-head"><span className="cremina-num">01</span><div><p className="cremina-overline">RITMOS DEL DÍA</p><h2 id="dayparts-title">Ven por lo que<br /><em>se te antoje.</em></h2></div><p>Una estructura de consulta rápida para que cada visitante encuentre el momento que busca.</p></div><div className="cremina-day-grid"><article><span>07—11</span><h3>La primera taza</h3><p>Café y desayunos para empezar sin prisa.</p><b>MAÑANA</b></article><article><span>11—16</span><h3>La mesa servida</h3><p>Comida, lonches y algo dulce para acompañar.</p><b>MEDIODÍA</b></article><article><span>16—20</span><h3>La sobremesa</h3><p>Un postre, una bebida y un rato para quedarse.</p><b>TARDE</b></article></div></section>

      <section className="cremina-verified" aria-label="Datos públicos consultados"><div><span className="cremina-num">FICHA PÚBLICA</span><strong>{site.rating}</strong><small>{site.reviewCount} reseñas en Google</small></div><div><b>Precio medio</b><span>{site.priceRange}</span></div><div><b>Se puede consultar</b><span>{site.verifiedFeatures.join(' · ')}</span></div></section>

      <section className="cremina-menu" id="carta" aria-labelledby="menu-title"><div className="cremina-menu-side"><span className="cremina-num">02</span><p className="cremina-overline">CARTA DE LA CASA</p><h2 id="menu-title">La carta<br /><em>se lee fácil.</em></h2><p>La disponibilidad y los precios se confirman en el local. El botón abre la ubicación para que la visita sea directa.</p><RouteLink>Ver ubicación</RouteLink></div><div className="cremina-menu-list">{site.highlights.map((item,index)=><article key={item}><span>0{index+1}</span><div><h3>{item}</h3><p>{index===0?'Bebidas y desayunos para la primera visita.':index===1?'Una opción para compartir o comer algo completo.':'Plaza Las Brisas, local L42.'}</p></div><b>{index===0?'AM':'PM'}</b></article>)}{site.services.map((item,index)=><article className="cremina-menu-muted" key={item}><span>0{index+4}</span><div><h3>{item}</h3><p>Producto digital que se puede consultar desde el teléfono.</p></div><b>INFO</b></article>)}</div></section>

      <section className="cremina-space" id="espacio" aria-labelledby="space-title"><div className="cremina-space-panel"><span className="cremina-num">03</span><p className="cremina-overline">EL ESPACIO</p><h2 id="space-title">Café con<br /><em>ambiente.</em></h2><p>La landing deja el menú arriba y el lugar abajo: una visita física debe poder entenderse antes de llegar.</p></div><div className="cremina-space-grid"><div className="space-tile tile-window"><span>01</span><strong>La ventana</strong><small>luz de mañana</small></div><div className="space-tile tile-table"><span>02</span><strong>La mesa</strong><small>para conversar</small></div><div className="space-tile tile-detail"><span>03</span><strong>El detalle</strong><small>algo dulce</small></div></div></section>

      <section className="cremina-visit" id="visita" aria-labelledby="visit-title"><div><span className="cremina-num">04</span><p className="cremina-overline">VISÍTANOS</p><h2 id="visit-title">Nos vemos<br /><em>en L42.</em></h2><p className="cremina-address">{site.address}</p><p className="cremina-hours">{site.hours}</p><RouteLink>Abrir Google Maps</RouteLink></div><a className="cremina-map" href={mapUrl} target="_blank" rel="noreferrer" aria-label="Abrir Cremina Bistro Café en Google Maps"><span className="cremina-map-road map-road-one" /><span className="cremina-map-road map-road-two" /><span className="cremina-map-dot" /><strong>Plaza Las Brisas<br />Local L42</strong><small>Cómo llegar ↗</small></a></section>

      <footer className="cremina-footer"><Crest /><span>Propuesta basada en ficha pública; confirmar logo, carta, horarios y redes antes de publicación.</span><a href="#inicio">↑</a></footer>
    </main>
  );
}
