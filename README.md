# Feestbeest 247

Next.js 16 (App Router) met statische export. Gas bezorgd in Amsterdam en omgeving: helium, CO₂, lasgassen en propaan/butaan.

## Starten

```bash
npm install
cp .env.example .env.local   # vul telefoon en WhatsApp in
npm run build                # schrijft de site naar ./out
node serve.mjs 8795          # lokaal bekijken op http://localhost:8795
```

`npm run dev` start de ontwikkelserver op poort 8794.

## Eerst invullen

Standaard staan bel 085 212 80 51 en WhatsApp +31 97010270187 op de site (zie `lib/site.ts`). Wil je andere nummers, zet dan in `.env.local`:

- `NEXT_PUBLIC_PHONE` (bijv. `+31852128051`), `NEXT_PUBLIC_PHONE_TEXT` (bijv. `085 212 80 51`)
- `NEXT_PUBLIC_WHATSAPP` (alleen cijfers, landcode eerst, bijv. `3197010270187`)
- optioneel `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_KVK`, `NEXT_PUBLIC_BTW`

In `lib/site.ts` staat ook `open247`. Zet die op `false` als jullie niet echt dag en nacht bereikbaar zijn. Dan verdwijnt de 24/7-claim uit de structured data.

## Google Ads en meten

Standaard laadt de site geen scripts van derden, dus geen cookies en geen cookiebanner. Vul `NEXT_PUBLIC_GTAG_ID` (en `NEXT_PUBLIC_ADS_CONVERSION` als `AW-XXXX/label`) of `NEXT_PUBLIC_GTM_ID` in om te meten. Dan:

- start Google Consent Mode v2 op "geweigerd" tot de bezoeker akkoord geeft (cookiemelding verschijnt vanzelf);
- worden klikken op bel- en WhatsApp-knoppen als `contact_click` verstuurd, plus een conversie als je een Ads-conversie invult.

## Inhoud aanpassen

| Wat | Waar |
| --- | --- |
| Gassen, teksten, veiligheidstips | `lib/gassen.ts` |
| Bezorggebieden en wijken | `lib/gebieden.ts` |
| Veelgestelde vragen | `lib/faq.ts` |
| Naam, domein, openingstijden | `lib/site.ts` |
| Kleuren, animaties | `app/globals.css` |

Sitemap, robots, structured data (LocalBusiness, Service, BreadcrumbList) en metadata worden hieruit automatisch gebouwd.

## Hosting

`./out` is een gewone statische map. Werkt op Vercel, Netlify, Cloudflare Pages en GitHub Pages (`public/CNAME` hoort bij GitHub Pages). `vercel.json` zet cache- en beveiligingsheaders. Zorg dat je host brotli of gzip aanzet.
