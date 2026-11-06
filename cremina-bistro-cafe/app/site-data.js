export const site = {
  slug: 'cremina-bistro-cafe',
  name: 'Cremina Bistro & Café',
  category: 'Café · Desayunos · Brunch',
  tag: 'Una mesa para quedarte.',
  intro: 'Una página que pone la carta, el ambiente y la ruta en el mismo recorrido.',
  address: 'Plaza Las Brisas, Blvd. Gustavo Díaz Ordaz 14910-L 42, Las Brisas, 22117 Tijuana, B.C.',
  phone: '',
  email: '',
  website: '',
  social: 'Red social oficial por confirmar',
  hours: 'Lunes a sábado 07:00–20:00; domingo 08:00–16:00 (ficha pública de Google Maps).',
  rating: '4.9/5',
  reviewCount: 183,
  priceRange: '$200–$300 MXN',
  verifiedFeatures: ['Consumo en el lugar', 'Para llevar', 'Desayuno y brunch', 'Tarjetas de crédito'],
  menuItems: [
    { name: 'Omelette chilaquiles', description: 'Omelette relleno de chilaquiles, queso y frijoles.', price: '$225' },
    { name: 'Grand Slam', description: 'Hot cakes, tocino, jamón, huevo y papas campesinas.', price: '$210' },
    { name: 'Crepina chipotle', description: 'Crepa salada con huevo, jamón, tocino y salsa cremosa.', price: '$190' },
    { name: 'Sándwich de arrachera', description: 'Arrachera, cebolla y pimientos salteados con guacamole.', price: '$235' },
    { name: 'Croissant', description: 'Huevo, jamón, tocino, queso, aguacate y papas.', price: '$145' },
    { name: 'Café y jugos', description: 'Bebidas para acompañar la mesa y la sobremesa.', price: 'consultar' },
  ],
  reviews: [
    { text: 'Lugar muy bonito, comida muy rica y muy buen trato.', meta: 'Reseña pública visible en Google Maps' },
    { text: 'Excelente servicio, la comida deliciosa y los postres son imperdibles.', meta: 'Resumen público de reseñas' },
    { text: 'Recomiendo ampliamente los hot cakes de elote.', meta: 'Reseña pública visible en Google Maps' },
  ],
  gallery: [
    {
      src: 'https://lh3.googleusercontent.com/grass-cs/AABkmLfJ4l7zv-6dz-rEXGfWigExcQpxoytTpN7RSmBfFNm_k6yVrqUfzsXuf8D-Bg9OGUiOV-a2m5a1RCMCn8k_1Q7F3CqznWoy1bELU3mztEOFJSOVJn55AoYq5-0KaaOjlPl8xYiFRkEkqwB6=s1600-k-no',
      alt: 'Comedor de Cremina Bistro y Café fotografiado por una persona visitante',
      label: 'EL COMEDOR',
      caption: 'Foto pública del perfil · ambiente y mesas'
    },
    {
      src: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RJIBt6jGfO5b28h0H6-roVV6Ff4HsgeyvWBQM558dVjcyAJpXkNAijQunkJGAEFGqwT0HsKscMHb1V6ItBLg32PnmF9ZfSFI5I_JwW0FTZi5itn52yX6mod3dH4iB86v_xKc9TU96rKhFK=s1600-k-no',
      alt: 'Postre y bebida fotografiados por una persona visitante en Cremina',
      label: 'POSTRE + BEBIDA',
      caption: 'Foto pública del perfil · confirmar atribución'
    },
    {
      src: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RwZ5FbYwdCyVnEYOtBrLbxaGagNrO2uuQTvZunzWGkZvgRnu2p-ClBX_K5YaYEzi-y3ZYvqiCauomRrJzSCcYQ6It4MGpHr3HEq7BO_Edp0_aTAIIvMq1SU3oq33HZFwz6pSa-0b4rGzrq=s1600-k-no',
      alt: 'Café fotografiado por una persona visitante en Cremina',
      label: 'CAFÉ',
      caption: 'Foto pública del perfil · confirmar atribución'
    },
    {
      src: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TOz7BbxWuE9cDAgQG8BE1sFn1FCUKd62CXZa-JWfl52dLcJm5RcrAuBfjbags3Bo8H2U7rms3rQ1KP1ytzlDepH71mZuHHTiV7uUHs9FOOQEpTMgV7B0fulgrLrF5DgnuuJCTh-FPsocM=s1600-k-no',
      alt: 'Página de carta fotografiada por una persona visitante en Cremina',
      label: 'LA CARTA',
      caption: 'Foto pública del perfil · precios sujetos a confirmación'
    },
  ],
  services: ['Landing de menú y horarios con mapa', 'Tarjeta QR para reseñas de Google'],
  sources: [
    ['Google Maps · ficha pública', 'https://www.google.com/maps/search/?api=1&query=Cremina+Bistro+%26+Caf%C3%A9+Tijuana'],
    ['Restaurant Guru · carta pública', 'https://es.restaurantguru.com/Cremina-Bistro-and-Cafe-Tijuana/menu'],
  ],
  accent: '#d79a58',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  demoLabel: 'Vista basada en información y fotos públicas · confirmar logo, redes y autorización antes de publicar'
};
