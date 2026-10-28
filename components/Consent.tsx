import Link from '@/components/Link';

/* Verborgen tot het script ziet dat er nog geen keuze is opgeslagen (zie lib/behavior.ts). */
export function Consent() {
  return (
    <div className="consent" role="dialog" aria-label="Cookies" aria-live="polite" hidden>
      <p>
        We meten anoniem hoe de site wordt gebruikt en of onze advertenties werken. Mag dat?{' '}
        <Link href="/privacy/">Privacy</Link>
      </p>
      <div>
        <button type="button" className="btn ghost sm" data-consent="denied">
          Nee
        </button>
        <button type="button" className="btn primary sm" data-consent="granted">
          Akkoord
        </button>
      </div>
    </div>
  );
}
