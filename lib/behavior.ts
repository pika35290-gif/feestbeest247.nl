/* Het enige JavaScript van de site: ~1 KB, inline, geen React op de client.
   Regelt menu, aantal-knoppen, bestelformulier (WhatsApp), cookiemelding en klik-metingen.
   De pagina's werken ook zonder: alles is gewone HTML en links. */

export function behaviorScript(conversion: string) {
  return `(function(){var d=document,h=d.documentElement,w=window,C=${JSON.stringify(conversion)},K='fb247-consent';
function ev(m,p){var l=w.dataLayer;l&&l.push({event:'contact_click',method:m,where:p});if(w.gtag){w.gtag('event','contact_click',{method:m,where:p});C&&w.gtag('event','conversion',{send_to:C})}}
function nav(o){var b=d.querySelector('.burger'),n=d.getElementById('mnav');if(!b||!n)return;b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Sluit menu':'Open menu');n.hidden=!o;h.classList.toggle('nav-open',o)}
d.addEventListener('click',function(e){var t=e.target.closest&&e.target.closest('a[data-track],.burger,[data-step],[data-consent],[data-geo]');if(!t)return;
if(t.hasAttribute('data-track'))return ev(t.getAttribute('data-track'),t.getAttribute('data-where')||'');
if(t.hasAttribute('data-geo'))return geo(t.closest('.w-loc'),t);
if(t.classList.contains('burger'))return nav(t.getAttribute('aria-expanded')!=='true');
if(t.hasAttribute('data-step')){var i=t.parentNode.querySelector('input');i.value=Math.max(1,Math.min(99,(parseInt(i.value,10)||1)+(+t.getAttribute('data-step'))));return}
var v=t.getAttribute('data-consent'),c=d.querySelector('.consent');try{localStorage.setItem(K,v)}catch(x){}
w.gtag&&w.gtag('consent','update',{ad_storage:v,ad_user_data:v,ad_personalization:v,analytics_storage:v});c&&(c.hidden=true)});
d.addEventListener('pointermove',function(e){if(e.pointerType==='touch'||!e.target.closest)return;var t=e.target.closest('.fm,.tile,.w,.area,.card,.step'),r;
if(t){r=t.getBoundingClientRect();var x=e.clientX-r.left,y=e.clientY-r.top;t.style.setProperty('--mx',x+'px');t.style.setProperty('--my',y+'px');t.style.setProperty('--rx',((x/r.width-.5)*9).toFixed(2)+'deg');t.style.setProperty('--ry',(-(y/r.height-.5)*9).toFixed(2)+'deg')}
var H=e.target.closest('.hero');if(H){r=H.getBoundingClientRect();H.style.setProperty('--px',e.clientX-r.left+'px');H.style.setProperty('--py',e.clientY-r.top+'px')}},{passive:true});
d.addEventListener('keydown',function(e){e.key==='Escape'&&nav(false)});
w.addEventListener('pageshow',function(){nav(false)});
var P=location.pathname;d.querySelectorAll('.nav-links a,.mnav>a').forEach(function(a){var u=a.getAttribute('href');(u===P||(u!=='/'&&P.indexOf(u)===0&&!d.querySelector('.nav-links a[href="'+P+'"]')))&&a.setAttribute('aria-current','page')});
d.addEventListener('submit',function(e){var f=e.target;if(!f.hasAttribute||!f.hasAttribute('data-wa'))return;e.preventDefault();var g=function(n){return new FormData(f).get(n)};
var t=['Hallo, ik wil graag gas bestellen.','Naam: '+g('naam'),'Telefoon: '+g('tel'),'Gas: '+g('gas'),'Aantal flessen: '+g('aantal'),'Plaats: '+g('plaats'),'Bezorgadres: '+g('adres'),'Opmerking: '+(g('opmerking')||'-')].join('\\n');
ev('whatsapp_form','form');w.location.href=f.getAttribute('data-wa')+'?text='+encodeURIComponent(t)});
var c=d.querySelector('.consent');if(c){try{if(!localStorage.getItem(K))c.hidden=false}catch(x){c.hidden=false}}

var Z={timeZone:'Europe/Amsterdam'},F=function(o){return new Intl.DateTimeFormat('nl-NL',Object.assign({},Z,o))},
fT=F({hour:'2-digit',minute:'2-digit'}),fW=F({weekday:'long'}),fD=F({day:'numeric'}),fM=F({month:'long',year:'numeric'}),fH=F({hour:'numeric',hourCycle:'h23'}),fY=F({year:'numeric',month:'numeric',day:'numeric'});
function set(k,v){var e=d.querySelectorAll('[data-live='+k+']');for(var i=0;i<e.length;i++)if(e[i].textContent!==v)e[i].textContent=v}
function wk(n){var p=fY.formatToParts(n),g={};p.forEach(function(x){g[x.type]=+x.value});var u=new Date(Date.UTC(g.year,g.month-1,g.day)),k=u.getUTCDay()||7;u.setUTCDate(u.getUTCDate()+4-k);return Math.ceil(((u-Date.UTC(u.getUTCFullYear(),0,1))/864e5+1)/7)}
function tick(){var n=new Date(),H=+fH.format(n);
set('time',fT.format(n));set('weekday',fW.format(n));set('day',fD.format(n));set('month',fM.format(n));set('week','week '+wk(n));
set('greet',H<6?'Goedenacht':H<12?'Goedemorgen':H<18?'Goedemiddag':'Goedenavond');
var t=d.querySelector('time[data-live]');t&&t.setAttribute('datetime',n.toISOString());
setTimeout(tick,60500-n.getSeconds()*1000-n.getMilliseconds())}
if(d.querySelector('[data-live]')){tick();d.addEventListener('visibilitychange',function(){d.hidden||tick()})}
function km(a,b,c,e){var r=Math.PI/180,x=(c-a)*r,y=(e-b)*r,s=Math.sin(x/2)*Math.sin(x/2)+Math.cos(a*r)*Math.cos(c*r)*Math.sin(y/2)*Math.sin(y/2);return 12742*Math.asin(Math.sqrt(s))}
function geo(card,btn){var out=card.querySelector('[data-live=geo]');
function say(t,links){out.textContent=t+' ';(links||[]).forEach(function(l){var a=d.createElement('a');a.href=l[1];a.textContent=l[0];if(l[2]){a.setAttribute('data-track','whatsapp');a.setAttribute('data-where','locatie');a.rel='noopener'}out.appendChild(a);out.appendChild(d.createTextNode(' '))})}
if(!navigator.geolocation)return say('Je browser deelt geen locatie.',[['Bekijk alle bezorggebieden','/bezorggebieden/']]);
btn.disabled=true;out.textContent='Even kijken…';
navigator.geolocation.getCurrentPosition(function(p){btn.disabled=false;
var A=JSON.parse(card.getAttribute('data-areas')),best=null;A.forEach(function(a){var k=km(p.coords.latitude,p.coords.longitude,a[2],a[3]);if(!best||k<best.k)best={n:a[0],u:a[1],k:k}});
var wa=card.getAttribute('data-wa')+'?text='+encodeURIComponent('Hallo, ik wil graag gas laten bezorgen in '+best.n+'.');
if(best.k<=15)say('Goed nieuws: je zit in de buurt van '+best.n+'. Wij bezorgen hier.',[['Bestel via WhatsApp',wa,1],['Bekijk '+best.n,best.u]]);
else if(best.k<=35)say('Je zit ongeveer '+Math.round(best.k)+' km van '+best.n+'. Vaak bezorgen we ook hier. Stuur ons je adres.',[['Vraag het via WhatsApp',wa,1]]);
else say('Je zit '+Math.round(best.k)+' km van ons bezorggebied. Stuur ons je adres, dan kijken we wat kan.',[['Vraag het via WhatsApp',wa,1],['Bezorggebieden','/bezorggebieden/']])},
function(){btn.disabled=false;say('Geen toegang tot je locatie. Je kunt ook gewoon je plaats kiezen.',[['Bezorggebieden','/bezorggebieden/']])},{timeout:8000,maximumAge:600000})}
})();`;
}
