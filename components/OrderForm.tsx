import { gassen } from '@/lib/gassen';
import { gebieden } from '@/lib/gebieden';
import { site } from '@/lib/site';

/* Bestelformulier: het script in lib/behavior.ts bouwt een nette WhatsApp-berichttekst.
   Geen server, geen opslag. */
export function OrderForm() {
  return (
    <form className="form" data-wa={`https://wa.me/${site.whatsapp}`} aria-label="Gas bestellen">
      <div className="field">
        <label htmlFor="f-naam">Naam</label>
        <input id="f-naam" name="naam" autoComplete="name" required enterKeyHint="next" />
      </div>
      <div className="field">
        <label htmlFor="f-tel">Telefoonnummer</label>
        <input id="f-tel" name="tel" type="tel" inputMode="tel" autoComplete="tel" required enterKeyHint="next" />
      </div>
      <div className="field">
        <label htmlFor="f-gas">Welk gas?</label>
        <select id="f-gas" name="gas" defaultValue={gassen[0].naam}>
          {gassen.map((g) => (
            <option key={g.slug} value={g.naam}>
              {g.naam}
            </option>
          ))}
          <option value="Weet ik nog niet">Weet ik nog niet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-aantal">Aantal flessen</label>
        <div className="stepper">
          <button type="button" aria-label="Minder flessen" data-step="-1">
            &minus;
          </button>
          <input id="f-aantal" name="aantal" type="number" inputMode="numeric" min={1} max={99} defaultValue={1} required />
          <button type="button" aria-label="Meer flessen" data-step="1">
            +
          </button>
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-plaats">Plaats</label>
        <select id="f-plaats" name="plaats" defaultValue="Amsterdam">
          {gebieden.map((g) => (
            <option key={g.slug} value={g.naam}>
              {g.naam}
            </option>
          ))}
          <option value="Andere plaats in de omgeving">Andere plaats in de omgeving</option>
        </select>
      </div>
      <div className="field wide">
        <label htmlFor="f-adres">Bezorgadres</label>
        <input id="f-adres" name="adres" autoComplete="street-address" required enterKeyHint="next" />
      </div>
      <div className="field wide">
        <label htmlFor="f-opm">Opmerking (optioneel)</label>
        <textarea id="f-opm" name="opmerking" rows={3} />
      </div>
      <div className="wide">
        <button type="submit" className="btn wa block">
          Verstuur via WhatsApp
        </button>
        <p className="fine">Je opent WhatsApp met je bestelling al ingevuld. Je hoort de totaalprijs van ons voordat we rijden.</p>
      </div>
    </form>
  );
}
