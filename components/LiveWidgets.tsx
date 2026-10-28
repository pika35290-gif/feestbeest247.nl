import type { CSSProperties } from 'react';
import { gebieden } from '@/lib/gebieden';
import { site } from '@/lib/site';

/* Live tegels in iOS-widgetstijl: tijd, datum en locatie.
   Server-HTML heeft nette beginwaarden; het script in lib/behavior.ts houdt ze actueel
   (tijdzone Amsterdam). De locatiecheck is opt-in: de positie wordt lokaal vergeleken en nooit verstuurd. */

const zone = { timeZone: 'Europe/Amsterdam' } as const;

export function LiveWidgets() {
  const now = new Date();
  const time = new Intl.DateTimeFormat('nl-NL', { ...zone, hour: '2-digit', minute: '2-digit' }).format(now);
  const weekday = new Intl.DateTimeFormat('nl-NL', { ...zone, weekday: 'long' }).format(now);
  const day = new Intl.DateTimeFormat('nl-NL', { ...zone, day: 'numeric' }).format(now);
  const month = new Intl.DateTimeFormat('nl-NL', { ...zone, month: 'long', year: 'numeric' }).format(now);
  const areas = JSON.stringify(gebieden.map((g) => [g.naam, `/bezorggebieden/${g.slug}/`, g.lat, g.lng]));

  return (
    <section className="wrap live" aria-label="Live: tijd, datum en locatie">
      <article className="w w-time" data-r="" style={{ '--o': '0%' } as CSSProperties}>
        <p className="w-eyebrow">
          <span className="dot" aria-hidden="true" />
          <span data-live="greet">Amsterdam</span>
        </p>
        <time className="w-big" data-live="time" dateTime={now.toISOString()}>
          {time}
        </time>
        <p className="w-sub">{site.open247 ? `${site.hoursText} in Amsterdam` : 'Nu in Amsterdam'}</p>
      </article>

      <article className="w w-date" data-r="" style={{ '--o': '8%' } as CSSProperties}>
        <p className="w-eyebrow" data-live="weekday">
          {weekday}
        </p>
        <p className="w-big" data-live="day">
          {day}
        </p>
        <p className="w-sub">
          <span data-live="month">{month}</span>
          <span className="w-mute"> &middot; <span data-live="week">week</span></span>
        </p>
      </article>

      <article className="w w-loc" data-r="" style={{ '--o': '16%' } as CSSProperties} data-areas={areas} data-wa={`https://wa.me/${site.whatsapp}`}>
        <p className="w-eyebrow">Bezorggebied</p>
        <h2 className="w-title">Amsterdam en omgeving</h2>
        <p className="w-sub">Amstelveen, Zaandam, Haarlem en Almere.</p>
        <button type="button" className="btn sm light" data-geo>
          Kom ik in aanmerking?
        </button>
        <p className="w-geo" data-live="geo" aria-live="polite">
          Check met je locatie of we bij je langskomen. Die blijft op je toestel.
        </p>
      </article>
    </section>
  );
}
