import Link from '@/components/Link';
import { site, telHref, waHref } from '@/lib/site';

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false" fill="currentColor">
    <path d="M12 3C6.500 3 2 6.800 2 11.600c0 2.500 1.200 4.700 3.200 6.300L4.500 21.500l4-1.800c1.100.3 2.300.5 3.500.5 5.500 0 10-3.800 10-8.600S17.500 3 12 3z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false" fill="currentColor">
    <path d="M6.600 10.800a15 15 0 0 0 6.600 6.600l2.200-2.200a1 1 0 0 1 1-.25 11.400 11.400 0 0 0 3.600.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.500a1 1 0 0 1 1 1c0 1.250.2 2.450.57 3.600a1 1 0 0 1-.25 1z" />
  </svg>
);

type Props = { className?: string; where?: string };

export function WhatsAppButton({ className = '', where = 'cta', text }: Props & { text?: string }) {
  return (
    <a
      className={`btn wa ${className}`}
      href={waHref(text)}
      data-track="whatsapp"
      data-where={where}
      rel="noopener"
    >
      <WaIcon />
      Bestel via WhatsApp
    </a>
  );
}

export function CallButton({ className = '', where = 'cta' }: Props) {
  return (
    <a className={`btn primary ${className}`} href={telHref} data-track="call" data-where={where}>
      <PhoneIcon />
      Bel {site.phoneText}
    </a>
  );
}

export function OrderLink({ className = '' }: { className?: string }) {
  return (
    <Link className={`btn ghost ${className}`} href="/contact/#bestellen">
      Online bestellen
    </Link>
  );
}
