// Atualiza os prints dos sites do portfólio (public/portfolio/<site>-lap|cel|desk|tab.webp).
// Roda todo dia no GitHub Actions (.github/workflows/atualizar-prints.yml): abre cada site de
// src/data/projetos.ts, tira o print de página inteira (sem aviso de cookies e sem menus fixos repetidos)
// e só troca o arquivo quando o site mudou de verdade. O commit dispara o deploy na Vercel.
// Local: node scripts/atualizar-prints.mjs  (usa o Chrome instalado; CHROME_PATH muda o caminho)
import { existsSync, readFileSync } from 'node:fs';
import puppeteer from 'puppeteer';
import sharp from 'sharp';
sharp.cache(false);
import { projetos } from '../src/data/projetos.ts';

// projetos com print manual (não atualizar sozinho): painel com dados internos, sistema com login e apps com recorte próprio
const IGNORAR = ['RollerPort Relatórios', 'Sistema RollerPort', 'Yvan Ótica', 'RollerPort Links'];
// formato de cada print: tela do navegador e tamanho final do arquivo
const FORMATOS = {
  desk: { tela: [1440, 900, false], largura: 800, alturaMax: 1778 },
  lap: { tela: [1280, 800, false], largura: 720, alturaMax: 1800 },
  tab: { tela: [768, 1024, false], largura: 480, alturaMax: 2125 },
  cel: { tela: [390, 844, true], largura: 300, alturaMax: 2615 },
};
const LIMITE = 0.012; // diferença média mínima (0 a 1) para considerar que o site mudou
// opcional: node scripts/atualizar-prints.mjs sanremax kimax  → só esses sites
const SO = process.argv.slice(2);

const nav = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || undefined,
  args: ['--no-sandbox', '--hide-scrollbars'],
});

// diferença média entre duas imagens, comparando uma miniatura em cinza
async function diferenca(a, b) {
  const mini = (img) => sharp(img).resize(64, 160, { fit: 'fill' }).grayscale().raw().toBuffer();
  const [x, y] = await Promise.all([mini(a), mini(b)]);
  let soma = 0;
  for (let i = 0; i < x.length; i++) soma += Math.abs(x[i] - y[i]);
  return soma / x.length / 255;
}

async function capturar(url, [w, h, movel]) {
  const pg = await nav.newPage();
  try {
    await pg.setViewport({ width: w, height: h, isMobile: movel, hasTouch: movel });
    await pg.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    // rola até o fim para carregar imagens com lazy load
    await pg.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 150)); }
      scrollTo(0, 0);
    });
    await new Promise((r) => setTimeout(r, 2500));
    // tira avisos de cookies e menus fixos (no print de página inteira eles se repetem no meio)
    await pg.evaluate(() => {
      document.querySelectorAll('body *').forEach((e) => {
        const c = getComputedStyle(e);
        if (c.position !== 'fixed' && c.position !== 'sticky') return;
        if (/cookie|privacidade|lgpd/i.test(e.innerText || '')) return e.remove();
        if (c.position === 'fixed') {
          if (e.getBoundingClientRect().top < 120) e.style.position = 'absolute';
          else e.remove();
        }
      });
    });
    return await pg.screenshot({ fullPage: true });
  } finally {
    await pg.close();
  }
}

let trocados = 0;
for (const p of projetos) {
  if (IGNORAR.includes(p.nome)) continue;
  const slug = p.lap[0].match(/\/portfolio\/(.+)-lap\.webp$/)?.[1];
  if (!slug || (SO.length && !SO.includes(slug))) continue;
  for (const [tipo, f] of Object.entries(FORMATOS)) {
    const arquivo = `public/portfolio/${slug}-${tipo}.webp`;
    // só atualiza formatos que o site já usa (lap e cel em todos; desk e tab só onde existem)
    if (!existsSync(arquivo)) continue;
    try {
      const png = await capturar(p.url, f.tela);
      const reduzido = await sharp(png).resize({ width: f.largura }).toBuffer();
      const { height } = await sharp(reduzido).metadata();
      const novo = await sharp(reduzido)
        .extract({ left: 0, top: 0, width: f.largura, height: Math.min(f.alturaMax, height) })
        .webp({ quality: 78 })
        .toBuffer();
      const d = await diferenca(novo, readFileSync(arquivo));
      if (d < LIMITE) { console.log(`= ${slug}-${tipo} sem mudança (${(d * 100).toFixed(1)}%)`); continue; }
      await sharp(novo).toFile(arquivo);
      trocados++;
      console.log(`✓ ${slug}-${tipo} atualizado (${(d * 100).toFixed(1)}% diferente)`);
    } catch (e) {
      // site fora do ar ou lento: mantém o print antigo
      console.log(`! ${slug}-${tipo} mantido: ${e.message.split('\n')[0]}`);
    }
  }
}
await nav.close();
console.log(`${trocados} print(s) atualizado(s)`);
