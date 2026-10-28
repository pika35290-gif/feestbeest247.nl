import { telHref, waHref } from '@/lib/site';

/* Vaste balk onderaan op mobiel: één tik om te bellen of te appen. */
export function StickyCta() {
  return (
    <div className="mbar">
      <a className="btn wa" href={waHref()} data-track="whatsapp" data-where="sticky" rel="noopener">
        WhatsApp
      </a>
      <a className="btn primary" href={telHref} data-track="call" data-where="sticky">
        Bel nu
      </a>
    </div>
  );
}
