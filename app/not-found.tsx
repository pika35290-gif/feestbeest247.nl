import type { Metadata } from 'next';
import Link from '@/components/Link';

export const metadata: Metadata = {
  title: 'Pagina niet gevonden',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="phero">
      <div className="wrap center" style={{ textAlign: 'center' }}>
        <p className="eyebrow">404</p>
        <h1>Deze pagina bestaat niet.</h1>
        <p className="lead" style={{ margin: '1.2rem auto 2rem' }}>Misschien zocht je een van deze pagina&rsquo;s.</p>
        <div className="cta-row">
          <Link className="btn primary" href="/">Naar home</Link>
          <Link className="btn ghost" href="/gassen/">Gassen</Link>
          <Link className="btn ghost" href="/contact/">Contact</Link>
        </div>
      </div>
    </section>
  );
}
