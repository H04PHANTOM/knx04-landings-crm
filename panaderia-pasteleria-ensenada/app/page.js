import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = site.phone ? `tel:${site.phone}` : null;

function Wordmark() {
  return <a className="ens-wordmark" href="#top" aria-label={`Inicio de ${site.name}`}><span>Panadería</span><strong>Ensenada</strong><small>pan · pastelería · eventos</small></a>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return <main className="ens-page" id="top">
    <header className="ens-header shell"><Wordmark /><nav><a href="#vitrina">Vitrina</a><a href="#eventos">Eventos</a><a href="#visita">Visítanos</a></nav><a className="ens-header-cta" href={phoneHref || mapUrl} target={phoneHref ? undefined : '_blank'} rel={phoneHref ? undefined : 'noreferrer'}>{phoneHref ? 'Llamar' : 'Abrir Maps'} ↗</a></header>

    <section className="ens-opening shell"><div className="ens-opening-kicker"><span>01</span><p>Una mañana empieza distinto</p></div><div className="ens-opening-copy"><h1>Pan de barrio,<br /><i>memoria de mesa.</i></h1><p>{site.intro}</p><div className="ens-opening-links"><a href="#vitrina">Ver la vitrina <span>↓</span></a><a href={mapUrl} target="_blank" rel="noreferrer">Llegar al local ↗</a></div></div><div className="ens-bread-art" aria-hidden="true"><div className="ens-circle ens-circle-one" /><div className="ens-circle ens-circle-two" /><span>HORNEADO<br /><b>HOY</b></span></div></section>

    <section className="ens-ticker" aria-label="Especialidades"><div><span>BIROTE</span><b>·</b><span>PAN DULCE</span><b>·</b><span>PASTELES</span><b>·</b><span>MESAS DE POSTRES</span><b>·</b><span>BOCADILLOS</span><b>·</b><span>BIROTE</span></div></section>

    <section className="ens-vitrina shell" id="vitrina"><div className="ens-vitrina-intro"><p className="ens-kicker">02 / La vitrina</p><h2>Elige el momento<br />que quieres celebrar.</h2><p>La información pública menciona pan dulce, telera, ciabatta, pasteles y mesas de postres. La página los separa para que el cliente no tenga que buscar todo en una sola imagen.</p></div><div className="ens-rack">{site.catalog.map((item, index) => <article key={item.title} className={`ens-rack-card ens-rack-card-${index + 1}`}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><a href={phoneHref || mapUrl} target={phoneHref ? undefined : '_blank'} rel={phoneHref ? undefined : 'noreferrer'}>{item.action} ↗</a></article>)}</div></section>

    <section className="ens-order shell" id="eventos"><div className="ens-order-number">03</div><div className="ens-order-copy"><p className="ens-kicker">Pedidos para eventos</p><h2>De un pastel a una mesa completa.</h2><p>{site.eventNote}</p><div className="ens-steps">{site.steps.map((step, index) => <div key={step}><b>0{index + 1}</b><span>{step}</span></div>)}</div></div><div className="ens-order-note"><strong>Tip de pedido</strong><p>Para una cotización precisa, confirma fecha, cantidad, sabor y decoración directamente con el local.</p><a href={phoneHref || mapUrl} target={phoneHref ? undefined : '_blank'} rel={phoneHref ? undefined : 'noreferrer'}>{phoneHref ? 'Solicitar por teléfono' : 'Abrir ubicación'} ↗</a></div></section>

    <section className="ens-visit shell" id="visita"><div><p className="ens-kicker">Visítanos</p><h2>{site.address}</h2><p>{site.hours}</p><p className="ens-note">La ficha pública muestra servicio para llevar. Hay más de una referencia de dirección en directorios; valida el punto exacto antes de publicar la versión final.</p></div><div className="ens-visit-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Google Maps ↗</a>{phoneHref && <a href={phoneHref}>664 686 9481 ↗</a>}</div></section>
    <footer className="ens-footer shell"><Wordmark /><span>Catálogo conceptual basado en fuentes públicas · confirmar productos, precios y dirección.</span></footer>
  </main>;
}
