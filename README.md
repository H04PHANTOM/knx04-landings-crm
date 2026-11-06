# KNX04 · Landings CRM

Sitios de producto independientes para las oportunidades en etapa **Propuesta** del CRM. Cada carpeta es una aplicación Next.js con React y JavaScript, exportable como sitio estático.

## Alcance

- 19 proyectos, uno por negocio.
- Cada sitio convierte la idea comercial del CRM en una experiencia utilizable: servicios, contacto, ubicación y llamados a la acción.
- Contenido construido a partir de señales públicas consultadas el 5 de noviembre de 2026.
- Las fichas muestran fuentes y una nota de confirmación: no son afirmaciones de necesidad, resultados ni autorización de uso de marca.
- No se descargaron logos, fotografías ni menús de terceros. La marca visible es KNX04; los activos del negocio quedan pendientes de permiso y validación.
- No hay envíos de WhatsApp, correo ni formularios conectados.

## Desarrollo local

```bash
npm install
npm run build:pages
```

Para levantar una propuesta en Docker: `docker compose up --build cremina-bistro-cafe`. Las demás entradas están definidas en `docker-compose.yml`, cada una con su puerto local.

## Publicación

`npm run build:pages` construye cada proyecto con su propia ruta y genera `dist/` con un menú. En GitHub Pages, el workflow calcula automáticamente el prefijo del repositorio para que los estilos, scripts y recursos de cada sitio carguen correctamente.

## Siguiente revisión comercial

Antes de compartir una demo con un negocio, confirmar nombre, horario, teléfono, redes, fotos, menú y alcance. Los precios, reparto de ingresos y cualquier integración con Promatic se deciden en el CRM; no aparecen en estas vistas públicas.
