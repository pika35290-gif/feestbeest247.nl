import Link from '@/components/Link';
import { gassen } from '@/lib/gassen';
import { gebieden } from '@/lib/gebieden';
import { site, telHref } from '@/lib/site';

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <p className="foot-h">{site.name}</p>
            <p className="foot-t">
              Helium, CO&#8322;, lasgassen en propaan, bezorgd in Amsterdam en omgeving. {site.hoursText}.
            </p>
            <p className="foot-t">
              <a href={telHref} data-track="call" data-where="footer">
                {site.phoneText}
              </a>
              {site.email && (
                <>
                  <br />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </>
              )}
            </p>
          </div>
          <nav aria-label="Gassen">
            <p className="foot-h">Gassen</p>
            {gassen.map((g) => (
              <Link key={g.slug} href={`/gassen/${g.slug}/`}>
                {g.naam}
              </Link>
            ))}
          </nav>
          <nav aria-label="Bezorggebieden">
            <p className="foot-h">Bezorggebieden</p>
            <Link href="/bezorggebieden/amsterdam-omgeving/">Amsterdam en omstreken</Link>
            {gebieden.map((g) => (
              <Link key={g.slug} href={`/bezorggebieden/${g.slug}/`}>
                {g.naam}
              </Link>
            ))}
          </nav>
          <nav aria-label="Informatie">
            <p className="foot-h">Informatie</p>
            <Link href="/contact/">Contact</Link>
            <Link href="/veelgestelde-vragen/">Veelgestelde vragen</Link>
            <Link href="/privacy/">Privacy</Link>
            <Link href="/voorwaarden/">Voorwaarden</Link>
          </nav>
        </div>
        <p className="foot-legal">
          &copy; {new Date().getFullYear()} {site.legalName}
          {site.kvk && <> &middot; KvK {site.kvk}</>}
          {site.btw && <> &middot; btw {site.btw}</>}
        </p>
      </div>
    </footer>
  );
}
