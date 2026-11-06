# KNX04 · Landings CRM

Sitios de producto independientes para las oportunidades en etapa **Propuesta** del CRM. Cada carpeta es una aplicación Next.js con React y JavaScript, exportable como sitio estático.

## Alcance

- 19 proyectos, uno por negocio.
- Cada sitio tiene una estructura visual propia según su giro: catálogo floral, reserva de barbería, menú de cafetería, carta nocturna, vitrina de panadería, catálogo de ferretería, agenda veterinaria, entre otras.
- El contenido parte de señales públicas consultadas el 5 de noviembre de 2026. Las referencias sirvieron para definir patrones de navegación y conversión; no se copiaron interfaces ni fotografías.
- La única marca gráfica de tercero verificada e integrada es el logotipo público de Barbería JR desde su propio sitio de reservas. En los demás sitios se usa un identificador tipográfico provisional hasta validar el logotipo oficial y su permiso de uso.
- Los datos de horarios, teléfonos, menús, redes, imágenes y alcance deben confirmarse con cada negocio antes de convertir una vista en sitio de producción.
- No hay envíos de WhatsApp, correo ni formularios conectados, ni datos de CRM/Supabase dentro de las páginas públicas.

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
