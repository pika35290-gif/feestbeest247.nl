// Kleine statische server voor ./out (lokaal testen, met brotli/gzip zoals een echte host).
// Gebruik: node serve.mjs [poort]
import { createServer } from 'node:http';
import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { brotliCompressSync, gzipSync } from 'node:zlib';

const root = join(process.cwd(), 'out');
const port = Number(process.argv[2]) || 8795;
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.webmanifest': 'application/manifest+json',
  '.json': 'application/json', '.woff2': 'font/woff2', '.ico': 'image/x-icon',
};
const compressible = new Set(['.html', '.js', '.css', '.svg', '.txt', '.xml', '.webmanifest', '.json']);
const cache = new Map();

createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  const p = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '');
  let file = join(root, p);
  if (existsSync(file) && statSync(file).isDirectory()) {
    if (!url.pathname.endsWith('/')) { res.writeHead(308, { Location: url.pathname + '/' }); return res.end(); }
    file = join(file, 'index.html');
  }
  let status = 200;
  if (!existsSync(file)) { file = join(root, '404.html'); status = 404; }
  const ext = extname(file);
  const headers = { 'Content-Type': types[ext] || 'application/octet-stream' };
  headers['Cache-Control'] = p.replaceAll('\\', '/').startsWith('/_next/static') ? 'public, max-age=31536000, immutable' : 'no-cache';

  const ae = String(req.headers['accept-encoding'] || '');
  if (compressible.has(ext) && /\bbr\b|\bgzip\b/.test(ae)) {
    const enc = /\bbr\b/.test(ae) ? 'br' : 'gzip';
    const key = enc + file + statSync(file).mtimeMs;
    let buf = cache.get(key);
    if (!buf) {
      const raw = readFileSync(file);
      buf = enc === 'br' ? brotliCompressSync(raw) : gzipSync(raw);
      cache.set(key, buf);
    }
    res.writeHead(status, { ...headers, 'Content-Encoding': enc, Vary: 'Accept-Encoding', 'Content-Length': buf.length });
    return res.end(buf);
  }
  res.writeHead(status, headers);
  createReadStream(file).pipe(res);
}).listen(port, () => console.log(`http://localhost:${port}`));
