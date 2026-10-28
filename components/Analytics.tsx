import { site } from '@/lib/site';
import { Consent } from './Consent';

/* Laadt alleen iets als er een tag-ID is ingevuld. Standaard: niets, dus geen cookies,
   geen extra requests en geen cookiebanner. Met tag: Consent Mode v2 staat op "geweigerd"
   tot de bezoeker akkoord geeft. Het Google-script start pas na de load-gebeurtenis. */
export function Analytics() {
  const id = site.gtagId || site.gtmId;
  if (!id) return null;

  const src = site.gtagId
    ? `https://www.googletagmanager.com/gtag/js?id=${site.gtagId}`
    : `https://www.googletagmanager.com/gtm.js?id=${site.gtmId}`;

  const init = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('fb247-consent')==='granted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'})}}catch(e){}
${site.gtagId ? `gtag('js',new Date());gtag('config','${site.gtagId}');` : `dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});`}
addEventListener('load',function(){setTimeout(function(){var s=document.createElement('script');s.async=true;s.src=${JSON.stringify(src)};document.head.appendChild(s)},300)});`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: init }} />
      <Consent />
    </>
  );
}
