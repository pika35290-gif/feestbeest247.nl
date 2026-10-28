import Link from '@/components/Link';
import { site, telHref, waHref } from '@/lib/site';

type Item = { href: string; label: string };

/* Zonder React op de client: de knop wordt bediend door het kleine script in lib/behavior.ts. */
export function MobileNav({ items }: { items: Item[] }) {
  return (
    <>
      <button type="button" className="burger" aria-expanded="false" aria-controls="mnav" aria-label="Open menu">
        <span />
        <span />
      </button>
      <nav id="mnav" className="mnav" aria-label="Hoofdmenu mobiel" hidden>
        {items.map((i, n) => (
          <Link key={i.href} href={i.href} style={{ ['--n' as string]: n }}>
            {i.label}
          </Link>
        ))}
        <div className="mcta">
          <a className="btn wa block" href={waHref()} data-track="whatsapp" data-where="menu" rel="noopener">
            Bestel via WhatsApp
          </a>
          <a className="btn primary block" href={telHref} data-track="call" data-where="menu">
            Bel {site.phoneText}
          </a>
        </div>
      </nav>
    </>
  );
}
