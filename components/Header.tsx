import Link from '@/components/Link';
import { MobileNav } from './MobileNav';
import { site, waHref } from '@/lib/site';

export const navItems = [
  { href: '/gassen/', label: 'Gassen' },
  { href: '/bezorggebieden/', label: 'Bezorggebieden' },
  { href: '/bezorggebieden/amsterdam-omgeving/', label: 'Omstreken' },
  { href: '/veelgestelde-vragen/', label: 'Vragen' },
  { href: '/contact/', label: 'Contact' },
];

export function Header() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="logo" aria-label={`${site.name}, naar de homepage`}>
          <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#2c2c2e" />
                <stop offset="1" stopColor="#0b0b0d" />
              </linearGradient>
              <linearGradient id="lb" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fff" />
                <stop offset="1" stopColor="#a1a1a6" />
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="8" fill="url(#lg)" />
            <rect x=".5" y=".5" width="31" height="31" rx="7.5" fill="none" stroke="#fff" strokeOpacity=".18" />
            <path d="M13 6h6v2.500l1.400 1.300A4.800 4.800 0 0 1 22 13v11a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V13a4.800 4.800 0 0 1 1.600-3.700L13 8.500z" fill="url(#lb)" />
          </svg>
          <span>{site.name}</span>
        </Link>
        <nav className="nav-links" aria-label="Hoofdmenu">
          {navItems.map((i) => (
            <Link key={i.href} href={i.href}>
              {i.label}
            </Link>
          ))}
        </nav>
        <a className="nav-cta" href={waHref()} data-track="whatsapp" data-where="nav" rel="noopener">
          Bestel
        </a>
        <MobileNav items={navItems} />
      </div>
    </header>
  );
}
