// O Chrome do puppeteer só é usado pelo robô dos prints (scripts/atualizar-prints.mjs).
// Na Vercel o build do site não precisa dele, então o download é pulado.
module.exports = { skipDownload: !!process.env.VERCEL };
