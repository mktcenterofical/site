# Site MKT Center

## Negócio
Agência de marketing digital: sites, aplicativos, sistemas,
lojas virtuais, tráfego/SEO e marketing político (todos os partidos).
Público: donos de comércio, empresas e políticos. Maioria no celular.
Objetivo do site: gerar contatos pelo WhatsApp e pelo formulário.

## Marca
- Seguir o Design System MKT Center: https://claude.ai/artifact/FuqM2mZiv4nB2v4R81pfat (tokens em src/styles/global.css)
- Ícones: src/components/Icon.astro (traço 2px). Nunca emojis como ícones
- Favicon: emblema circular (referencia/emblema-mkt.png)
- Laranja #ff6900 (destaques e botões, no máximo ~10% da tela)
- Menu do topo com fundo preto #090a0c (preto da logo), links claros
- Tema ESCURO no site todo (estilo do hero): fundo #090a0c, seções alternadas #111317 com grade sutil, texto #fff, texto secundário #aeb4bd, linhas #23262c
- Laranja em texto usa #ff8a24 (orange-text) no fundo escuro
- Botão laranja sempre com texto escuro #141006 (contraste)
- Fontes: Barlow Condensed (títulos), DM Sans (texto)
- Logo: public/logo-escuro.webp (fundo transparente, letras brancas) no cabeçalho e no rodapé. logo-claro.webp fica para fundos claros. Originais em referencia/logo-fundo-*.png
- Hero da home: src/components/HeroCrescimento.astro — textos animados à esquerda; à direita os 4 aparelhos juntos (grafite escuro), cada um com um projeto fictício: desktop = ERP "Gestão Pro" (TelaErp.astro), notebook = site institucional Pão Dourado (TelaSite.astro), tablet = loja virtual RS Moda (Loja.astro), celular = app de delivery Sabor Já (TelaApp.astro). Um destaque percorre os aparelhos: o aparelho sobe, brilha e 2 produtos saltam da tela; no celular um toque no app dispara um aviso em todas as telas ao mesmo tempo e os contadores (.lj-qtd) sobem. Fotos em public/mock/ (Unsplash)
- Pé do hero: indicador "ROLE" com seta animada (tablet em diante), dentro do fluxo do hero (o hero não ocupa mais a tela inteira); 20px entre o hero e a seção 1. Clicável, leva a #dez-segundos e some ao rolar
- Abaixo do hero: faixa de logos dos sites criados (src/components/Clientes.astro, logos em public/clientes/, originais em referencia/clientes/). Fundo claro (só o hero é preto), carrossel limitado à largura do site (.wrap 1140), logos em cartões brancos (cinza, cor + borda laranja no hover), cada logo leva ao site
- Seção 1 da home (logo abaixo do hero, antes da faixa de clientes): src/components/Secao10s.astro — esquerda: monitor e celular realistas (em código) montando o mesmo site + cronômetro grande realista de 10 s (só anima quando visível); direita: "Seu site explica o que você vende em 10 segundos?" (sem rótulo; "10 segundos?" sempre na mesma linha), descrição, 3 benefícios e CTAs (WhatsApp e Ver projetos)
- Menu: topo com Início, Quem somos, Portfólio e botão Contato (/contato/); faixa fina abaixo com os 5 serviços e ícones. Fundo dos menus #090a0c (mesmo tom do hero). Ao rolar (tablet em diante) só a faixa de serviços some e aparece um botão hambúrguer (☰) que a mostra de novo; o menu horizontal (Início, Quem somos, Portfólio, Contato) continua. Off-canvas só no celular
- Celular: tudo centralizado, margem lateral de 10px, sem nenhuma rolagem horizontal (html/body overflow-x:clip, sem carrosséis)

## Regras técnicas
- Layout próprio por dispositivo (bloco "LAYOUTS POR DISPOSITIVO" no fim de global.css): celular < 768 (menu off-canvas, conteúdo centralizado e empilhado, botões largos), tablet 768–1023 (2 colunas, hero centralizado), notebook 1024–1439 (3 colunas), desktop ≥ 1440 (tipografia maior, serviços em 5 colunas). O hero começa no aparelho de quem visita. /#menu abre o menu no celular
- Todo o conteúdo (cabeçalho, seções, rodapé) usa a largura total de 1140px (.wrap)
- Sem frameworks de JS no cliente; JS mínimo
- Imagens em WebP/AVIF com width e height
- Cada página: title único (até 60 caracteres), meta description
  (até 155), um único H1, canonical, Open Graph e Schema JSON-LD
- Lighthouse mobile: meta 90+ em todas as categorias
- Número do WhatsApp e dados da empresa ficam em src/config.ts
- Serviços ficam em src/data/servicos.ts (uma página por serviço)

## Textos
- Português do Brasil, frases curtas, sem jargão
- Nunca inventar números, depoimentos ou cases
- ATENÇÃO: contatos, preços, cases e depoimentos atuais são FICTÍCIOS (demo).
  Antes do lançamento oficial, trocar todos pelos reais.
