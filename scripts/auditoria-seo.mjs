// Auditoria de SEO do site gerado (dist/): títulos, descrições, H1, canonical, robots, links internos,
// imagens sem alt, dados estruturados (JSON-LD) e sitemap. Rodar depois do build:
//   npm run build && node scripts/auditoria-seo.mjs
import fs from 'node:fs';
import path from 'node:path';

const DOMINIO = 'https://mktcenter.com.br';
const arquivos = [];
(function andar(d) {
  for (const n of fs.readdirSync(d)) {
    const p = path.join(d, n);
    if (fs.statSync(p).isDirectory()) andar(p);
    else if (n.endsWith('.html') && !n.startsWith('google')) arquivos.push(p);
  }
})('dist');

const rota = (f) => '/' + path.relative('dist', f).split(path.sep).join('/').replace(/index\.html$/, '');
const rotas = new Set(arquivos.map(rota));
const pega = (h, re) => (h.match(re) || [])[1] || '';
const linhas = [], problemas = [], quebrados = {}, titulos = {}, descricoes = {};

for (const f of arquivos) {
  const h = fs.readFileSync(f, 'utf8');
  const r = rota(f);
  const t = pega(h, /<title>([^<]*)<\/title>/).replace(/&amp;/g, '&');
  const d = pega(h, /<meta name="description" content="([^"]*)"/).replace(/&amp;/g, '&');
  const canon = pega(h, /<link rel="canonical" href="([^"]+)"/);
  const robots = pega(h, /<meta name="robots" content="([^"]+)"/);
  const nH1 = (h.match(/<h1[\s>]/g) || []).length;
  const lang = pega(h, /<html[^>]*lang="([^"]+)"/);
  const og = pega(h, /<meta property="og:url" content="([^"]+)"/);
  (titulos[t] ||= []).push(r);
  (descricoes[d] ||= []).push(r);
  const indexavel = !/noindex/.test(robots);
  if (!t) problemas.push(`${r}: sem <title>`);
  if (indexavel && !/ \| MKT Center$/.test(t)) problemas.push(`${r}: título fora do padrão "Palavra - Complemento | MKT Center": ${t}`);
  if (indexavel && !t.includes(' - ')) problemas.push(`${r}: título sem o separador " - ": ${t}`);
  if (!d) problemas.push(`${r}: sem meta description`);
  if ([...d].length > 160) problemas.push(`${r}: description com ${[...d].length} caracteres`);
  if (indexavel && nH1 !== 1) problemas.push(`${r}: ${nH1} H1`);
  if (lang !== 'pt-BR') problemas.push(`${r}: lang="${lang}"`);
  if (indexavel && canon !== DOMINIO + r) problemas.push(`${r}: canonical ${canon}`);
  if (indexavel && og && og !== DOMINIO + r) problemas.push(`${r}: og:url ${og}`);
  for (const m of h.matchAll(/href="(\/[^"#?]*)/g)) {
    const u = m[1];
    if (/\.(png|webp|xml|ico|webmanifest|svg|jpg|css|js|html|txt)$/.test(u) || u.startsWith('/_astro')) continue;
    if (!rotas.has(u)) (quebrados[u] ||= new Set()).add(r);
  }
  for (const m of h.matchAll(/<img\b[^>]*>/g)) if (!/\balt[\s=>]/.test(m[0])) problemas.push(`${r}: imagem sem alt ${m[0].slice(0, 80)}`);
  const ld = [];
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { const j = JSON.parse(m[1]); ld.push(...(j['@graph'] || [j]).map((x) => x['@type'])); }
    catch { problemas.push(`${r}: JSON-LD inválido`); }
  }
  linhas.push({ rota: r, titulo: t, chars: [...t].length, desc: [...d].length, h1: nH1, robots: robots || '-', schema: ld.join(',') });
}
for (const [t, rs] of Object.entries(titulos)) if (rs.length > 1) problemas.push(`título repetido em ${rs.join(', ')}: ${t}`);
for (const [d, rs] of Object.entries(descricoes)) if (rs.length > 1 && d) problemas.push(`description repetida em ${rs.join(', ')}`);
for (const [u, rs] of Object.entries(quebrados)) problemas.push(`link interno quebrado ${u} (em ${[...rs].join(', ')})`);

const sm = fs.existsSync('dist/sitemap-0.xml') ? fs.readFileSync('dist/sitemap-0.xml', 'utf8') : '';
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const l of locs) if (!l.startsWith(DOMINIO)) problemas.push(`sitemap com domínio errado: ${l}`);
const rb = fs.existsSync('dist/robots.txt') ? fs.readFileSync('dist/robots.txt', 'utf8') : '';
if (!rb.includes(`Sitemap: ${DOMINIO}/sitemap-index.xml`)) problemas.push('robots.txt sem o sitemap do domínio oficial');

console.table(linhas);
console.log(`sitemap: ${locs.length} URLs`);
console.log(problemas.length ? `\n${problemas.length} problema(s):\n- ` + problemas.join('\n- ') : '\nNenhum problema encontrado.');
process.exitCode = problemas.length ? 1 : 0;
