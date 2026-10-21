// O Chrome do puppeteer só é usado pelo robô dos prints (scripts/atualizar-prints.mjs), que roda no GitHub Actions.
// Nas hospedagens (Vercel, Hostinger) o build do site não precisa dele, então o download é pulado.
module.exports = { skipDownload: !process.env.GITHUB_ACTIONS };
