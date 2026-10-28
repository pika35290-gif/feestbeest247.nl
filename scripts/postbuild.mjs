// Na `next build`: haal de React/Next-runtime uit de statische pagina's.
// De site is pure HTML + CSS + ~1 KB eigen script (lib/behavior.ts), dus er hoeft niets te hydrateren.
// Resultaat: geen render-blokkerende of main-thread-zware JavaScript, kleinere HTML, snelle LCP/INP.
import { readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = join(process.cwd(), 'out');
const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const strip = [
  /<script src="\/_next\/[^"]*"[^>]*><\/script>/g,
  /<script id="_R_">[\s\S]*?<\/script>/g,
  /<script>\(?self\.__next_f[\s\S]*?<\/script>/g,
  /<link rel="preload" as="script"[^>]*\/?>/g,
];

let before = 0;
let after = 0;
const files = walk(out);

for (const f of files.filter((p) => p.endsWith('.html'))) {
  const html = readFileSync(f, 'utf8');
  let next = html;
  for (const re of strip) next = next.replace(re, '');
  if (/_next\/static\/chunks\/[^"']+\.js|__next_f/.test(next)) throw new Error(`Next-runtime staat nog in ${f}`);
  before += Buffer.byteLength(html);
  after += Buffer.byteLength(next);
  writeFileSync(f, next);
}

// Ongebruikte JS-chunks en RSC-payloadbestanden (index.txt, __next.*.txt) hoeven niet mee naar de host.
for (const f of files) {
  const isChunk = /[\/]_next[\/]static[\/]chunks[\/][^\/]+\.js$/.test(f);
  const isRsc = /[\/](index|__next[^\/]*)\.txt$/.test(f);
  if (isChunk || isRsc) rmSync(f);
}

console.log(`postbuild: HTML ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB, Next-runtime verwijderd`);
