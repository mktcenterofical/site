// Carrosséis de cards (portfólio nas páginas Sites, Lojas e Apps): setas que avançam um card,
// setas desligadas nas pontas e scroll-snap só depois da 1ª interação (ligado no carregamento,
// o Chrome rola sozinho e deixa de medir o LCP). Cada bloco .st-carrossel tem um .st-pf e suas .st-seta.
export function iniciarCarrosseis() {
  document.querySelectorAll<HTMLElement>('.st-carrossel').forEach((bloco) => {
    const trilho = bloco.querySelector<HTMLElement>('.st-pf');
    const setas = bloco.querySelectorAll<HTMLButtonElement>('.st-seta');
    if (!trilho || setas.length < 2) return;
    const passo = () => ((trilho.firstElementChild as HTMLElement)?.offsetWidth || 260) + 16;
    const atualizar = () => {
      setas[0].disabled = trilho.scrollLeft < 4;
      setas[1].disabled = trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 4;
    };
    const encaixe = () => trilho.classList.add('encaixe');
    setas.forEach((b) => b.addEventListener('click', () => { encaixe(); trilho.scrollBy({ left: Number(b.dataset.dir) * passo(), behavior: 'smooth' }); }));
    ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach((ev) => trilho.addEventListener(ev, encaixe, { once: true, passive: true }));
    trilho.addEventListener('scroll', atualizar, { passive: true });
    addEventListener('resize', atualizar);
    atualizar();
  });
}
