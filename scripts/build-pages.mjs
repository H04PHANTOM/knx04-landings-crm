import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(new URL('..', import.meta.url).pathname);
const projects = [
  'cremina-bistro-cafe','tacos-varios-lia','floreria-yolanda','barberia-jr',
  'tortilleria-milpar','panaderia-pasteleria-ensenada','pasteleria-don-pedro',
  'fuel-coffee-bar','pollos-lopez','el-sazon-de-mary','pradera-el-cafe',
  'veterinaria-baja-jr','blue-barber','carniceria-el-chaparral','ferreteria-el-clavo',
  'los-cangrejos','cenaduria-casa-topete','la-super-torta','tacos-jalisco'
];
const nextCli = join(root, 'node_modules', 'next', 'dist', 'bin', 'next');
const dist = join(root, 'dist');
const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH || '';
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
for (const project of projects) {
  const result = spawnSync(process.execPath, [nextCli, 'build'], {
    cwd: join(root, project), stdio: 'inherit',
    env: { ...process.env, NEXT_PUBLIC_BASE_PATH: `${siteBasePath}/${project}` },
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
  cpSync(join(root, project, 'out'), join(dist, project), { recursive: true });
}
const cards = projects.map((project) => `<a href="./${project}/"><strong>${project.replaceAll('-', ' ')}</strong><span>Abrir sitio de producto →</span></a>`).join('');
writeFileSync(join(dist, 'index.html'), `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KNX04 · Sitios de producto</title><style>body{margin:0;background:#050606;color:#f8fff3;font-family:Inter,system-ui,sans-serif}main{width:min(1100px,calc(100% - 44px));margin:0 auto;padding:70px 0}p{color:#c2cec0;max-width:620px;line-height:1.5}.eyebrow{color:#b7ff00;font:700 11px ui-monospace,monospace;letter-spacing:.16em;text-transform:uppercase}h1{font-size:clamp(48px,8vw,90px);letter-spacing:-.08em;line-height:.9;margin:20px 0 28px}section{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-top:55px}a{display:flex;flex-direction:column;gap:12px;padding:22px;border:1px solid #344037;background:#0d100e;color:#f8fff3;text-decoration:none}a:hover{border-color:#b7ff00}a span{color:#b7ff00;font-size:13px}@media(max-width:600px){main{padding-top:40px}}</style></head><body><main><div class="eyebrow">KNX04 · Sitios de producto</div><h1>Sitios listos para revisar.</h1><p>Experiencias de producto construidas para cada negocio con información pública sujeta a confirmación. Selecciona un negocio para abrir su sitio.</p><section>${cards}</section></main></body></html>`);
