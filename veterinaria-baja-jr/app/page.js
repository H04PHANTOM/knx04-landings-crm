import { site } from './site-data';
import './globals.css';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`;
const phoneHref = `tel:${site.phone}`;

function Mark() {
  return <a className="vet-mark" href="#inicio" aria-label={`Inicio de ${site.name}`}><span>VETERINARIA</span><strong>BAJA JR</strong><small>cuidado cercano</small></a>;
}

export const metadata = { title: `${site.name} · ${site.category}`, description: site.intro };

export default function Page() {
  return <main className="vet-page" id="inicio">
    <header className="vet-header soft"><Mark /><div className="vet-open"><i /> atención local</div><nav><a href="#servicios">Servicios</a><a href="#confianza">Confianza</a><a href="#visita">Visita</a></nav><a className="vet-call" href={phoneHref}>Llamar ↗</a></header>

    <section className="vet-hero soft"><div className="vet-hero-photo"><img src={site.gallery[0].src} alt={site.gallery[0].alt} /><span>Foto pública · La Mesa</span></div><div className="vet-hero-copy"><p className="vet-kicker">Veterinaria · mascotas</p><h1>Cuida a quien<br /><em>te espera.</em></h1><p>{site.intro}</p><div className="vet-actions"><a className="vet-primary" href="#servicios">Ver atención <span>↓</span></a><a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar ↗</a></div></div></section>

    <section className="vet-facts soft"><div><strong>164</strong><span>reseñas públicas</span></div><div><strong>121</strong><span>con cinco estrellas</span></div><div><strong>09:00</strong><span>abre de lunes a sábado</span></div><div><strong>664</strong><span>902 0356</span></div></section>

    <section className="vet-services soft" id="servicios"><div className="vet-services-head"><p className="vet-kicker">01 / Atención</p><h2>Una visita<br /><em>tranquila.</em></h2><p>Las reseñas públicas mencionan atención a perritas, uñas y estética. Confirma el servicio y la disponibilidad por teléfono.</p></div><div className="vet-service-list">{site.services.map((service, index) => <article key={service.title}><span>0{index + 1}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><a href={phoneHref}>Preguntar ↗</a></article>)}</div></section>

    <section className="vet-confidence soft" id="confianza"><div className="vet-confidence-copy"><p className="vet-kicker">02 / Confianza</p><h2>Trato que<br /><em>se nota.</em></h2><p>{site.reviewSummary}</p><a href={site.mapsProfile} target="_blank" rel="noreferrer">Leer reseñas en Maps ↗</a></div><div className="vet-photo-grid"><figure><img src={site.gallery[1].src} alt={site.gallery[1].alt} /><figcaption>Foto pública de la ficha</figcaption></figure><figure><img src={site.gallery[2].src} alt={site.gallery[2].alt} /><figcaption>Foto pública asociada</figcaption></figure></div></section>

    <section className="vet-visit soft" id="visita"><div><p className="vet-kicker">03 / Ven a la clínica</p><h2>{site.address}</h2><p>{site.hours}</p><p className="vet-note">Confirma el tipo de atención, costo y horario antes de salir.</p></div><div className="vet-visit-actions"><a href={mapUrl} target="_blank" rel="noreferrer">Google Maps ↗</a><a href={phoneHref}>664 902 0356 ↗</a></div></section>
    <footer className="vet-footer soft"><Mark /><span>Nombre mostrado como texto hasta validar el logo oficial con el negocio.</span></footer>
  </main>;
}
