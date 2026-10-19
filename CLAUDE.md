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
- Tema CLARO: fundo branco, seções alternadas #f3f4f5, texto #111317, texto secundário #545a63
- Laranja em texto pequeno usa #a84300 (orange-text) (contraste no fundo claro)
- Botão laranja sempre com texto escuro #141006 (contraste)
- Fontes: Barlow Condensed (títulos), DM Sans (texto)
- Logo em fundo escuro: public/logo-escuro.webp (cabeçalho, fundo #000). Em fundo claro: public/logo-claro.webp (rodapé). Originais em referencia/logo-fundo-*.png
- Hero da home: src/components/HeroCrescimento.astro — textos animados à esquerda; à direita os 4 aparelhos juntos (grafite escuro), cada um com um projeto fictício: desktop = ERP "Gestão Pro" (TelaErp.astro), notebook = site institucional Pão Dourado (TelaSite.astro), tablet = loja virtual RS Moda (Loja.astro), celular = app de delivery Sabor Já (TelaApp.astro). Um destaque percorre os aparelhos: o aparelho sobe, brilha e 2 produtos saltam da tela; no celular um toque no app dispara um aviso em todas as telas ao mesmo tempo e os contadores (.lj-qtd) sobem. Fotos em public/mock/ (Unsplash)
- Abaixo do hero: faixa de logos dos sites criados (src/components/Clientes.astro, logos em public/clientes/, originais em referencia/clientes/). Rola sozinha, cinza com cor no hover, cada logo leva ao site.
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
