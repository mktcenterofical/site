// Teste visual: tira prints de página inteira de todas as rotas (computador e celular, animações paradas)
// e compara com a referência. Uso:
//   node scripts/comparar-visual.mjs base   → salva a referência em .visual/base
//   node scripts/comparar-visual.mjs        → tira de novo e mostra a diferença de cada página
// Precisa do site rodando em http://localhost:4321 (npx astro preview) e CHROME_PATH no Windows.
import fs from 'node:fs';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const BASE = process.env.BASE_URL || 'http://localhost:4321';
const rotas = ['', 'quem-somos/', 'portfolio/', 'criacao-de-sites/', 'loja-virtual/', 'aplicativos-e-sistemas/', 'videos/', 'redes-sociais/', 'marketing-politico/', 'contato/', 'trafego-e-seo/'];
const telas = [['pc', 1280, 800, false], ['cel', 390, 844, true]];
const modo = process.argv[2] === 'base' ? 'base' : 'novo';
fs.mkdirSync(`.visual/${modo}`, { recursive: true });

const nav = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || undefined });
const resultado = [];
for (const r of rotas) for (const [nome, w, h, movel] of telas) {
  const pg = await nav.newPage();
  await pg.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await pg.setViewport({ width: w, height: h, isMobile: movel, hasTouch: movel });
  await pg.goto(BASE + '/' + r, { waitUntil: 'networkidle0' });
  await pg.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise((s) => setTimeout(s, 60)); }
    scrollTo(0, 0);
    document.querySelectorAll('canvas').forEach((c) => (c.style.visibility = 'hidden')); // 3D varia a cada quadro
    const st = document.createElement('style');
    st.textContent = '*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}';
    document.head.appendChild(st);
  });
  await new Promise((s) => setTimeout(s, 800));
  const arq = `.visual/${modo}/${(r || 'home').replace(/\//g, '')}-${nome}.png`;
  await pg.screenshot({ path: arq, fullPage: true });
  await pg.close();
  if (modo === 'novo') {
    const ref = arq.replace('/novo/', '/base/');
    const [a, b] = await Promise.all([sharp(ref).metadata(), sharp(arq).metadata()]);
    if (a.width !== b.width || a.height !== b.height) { resultado.push([arq, `tamanho mudou ${a.height}→${b.height}px`]); continue; }
    const [x, y] = await Promise.all([sharp(ref).raw().toBuffer(), sharp(arq).raw().toBuffer()]);
    let dif = 0;
    for (let i = 0; i < x.length; i += 4) if (Math.abs(x[i] - y[i]) + Math.abs(x[i + 1] - y[i + 1]) + Math.abs(x[i + 2] - y[i + 2]) > 30) dif++;
    resultado.push([arq, `${((dif / (x.length / 4)) * 100).toFixed(3)}% dos pixels diferentes`]);
  }
}
await nav.close();
if (modo === 'novo') console.table(resultado);
else console.log('referência salva em .visual/base');
