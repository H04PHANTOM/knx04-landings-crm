export const site = {
  slug: 'tacos-varios-lia',
  name: 'Tacos Varios Lia',
  category: 'Comida casera · Tacos',
  tag: 'El guiso va en tortilla.',
  intro: 'Una carta móvil para saber qué hay, cuánto cuesta y cómo llegar.',
  address: 'Av. Las Brisas 15864, Las Brisas, 15804 Tijuana, B.C.',
  phone: '',
  email: '',
  website: '',
  social: 'Perfiles sociales oficiales por confirmar',
  hours: 'Lunes a sábado desde las 08:00 (horarios de cierre variables en la plataforma).',
  rating: '5.0/5',
  reviewCount: 8,
  review: 'Muy ricos tacos, en especial los de milanesa con chicharrón. Buena atención; los recomiendo.',
  menuGroups: [
    { title: 'Tacos de guisados', items: [
      { name: 'Rollito de jamón con salsa de chicharrón', price: '$45' },
      { name: 'Chile relleno', price: '$45' },
      { name: 'Chile relleno con salsa de papas', price: '$45' },
      { name: 'Chicharrón en salsa verde', price: '$45' },
      { name: 'Bistec con papas', price: '$45' },
    ]},
    { title: 'Milanesas y pechugas', items: [
      { name: 'Milanesa de res', price: '$45' },
      { name: 'Milanesa con salsa de papas', price: '$45' },
      { name: 'Milanesa con salsa de chicharrón', price: '$45' },
      { name: 'Pechuga empanizada', price: '$45' },
    ]},
    { title: 'Para acompañar', items: [
      { name: 'Rollito de jamón', price: '$45' },
      { name: 'Agua del día', price: '$50' },
      { name: 'Coca-Cola / Squirt', price: '$45' },
    ]},
  ],
  gallery: [
    {
      src: 'https://lh3.googleusercontent.com/grass-cs/AABkmLc7Mfmpp7fHZlHjm_0p9D8CkrRBOABtIDsQMWI-gmZvKJVMT2VvMkHi9bWIbT7VZNtxOFQV8LPRamNwxAL2VRDaqHlcB2GPPBKlEdAqtR113HrkcU_xZJuZcPX55XIvsJT1z8FBivRfv3M=s1600-k-no',
      alt: 'Puesto de Tacos Varios Lia fotografiado en su ficha pública',
      caption: 'Puesto fotografiado por una persona visitante'
    },
    {
      src: 'https://lh3.googleusercontent.com/grass-cs/AABkmLcTetteBz-7OmotRy20QRbIBK1KjSXMelqj_Lsp14maAll99kQW2lsFRbyAu990ODMAFc1uVDzcG-HaJ6CXL6q1IqEObrk503Jh6B7UfDPCO6FHfS4XxQLrfRY5FNhRPSbGjc6CgQ=s1600-k-no',
      alt: 'Taco de guisado fotografiado por una persona visitante',
      caption: 'Taco fotografiado en la ficha pública · confirmar atribución'
    },
  ],
  services: ['Menú virtual con botón de pedido', 'Página local con mapa y reseñas'],
  sources: [
    ['Google Maps · ficha pública', 'https://www.google.com/maps/search/?api=1&query=Tacos+Varios+Lia+Tijuana'],
    ['Uber Eats · menú público', 'https://guava.failover.uber.com/mx/store/tacos-varios-lia-tijuana/SnuEfqemTf6BECGgY9esGQ'],
  ],
  accent: '#e14931',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  demoLabel: 'Vista basada en menú y fotos públicas · confirmar marca, horario y autorización antes de publicar'
};
