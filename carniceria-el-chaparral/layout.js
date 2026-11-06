import { site } from './site-data';

export const metadata = {
  title: `${site.name} · KNX04`,
  description: site.intro,
};

export default function RootLayout({ children }) {
  return <html lang="es-MX"><body>{children}</body></html>;
}
