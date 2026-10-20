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
- Pé do hero: indicador "ROLE" com seta animada (tablet em diante), no pé do hero; o hero ocupa a tela toda (tablet em diante), então a seção 1 só aparece ao rolar, 20px abaixo. Clicável, leva a #dez-segundos e some ao rolar
- Faixa de logos dos sites criados (src/components/Clientes.astro, logos em public/clientes/): sem título, espaçamento padrão de seção, carrossel lento (110s; 80s no celular) na largura do site, logos monocromáticas em cinza; ao passar o mouse/tocar mostram a cor original (sem fundo); cada logo leva ao site
- Seção 1 da home (logo abaixo do hero, antes da faixa de clientes): src/components/Secao10s.astro — esquerda: monitor e celular realistas (em código) montando o mesmo site + cronômetro grande realista que conta de 0 a 10 s e para no 10 com o site pronto (anima uma vez, quando visível); direita: no mesmo estilo do hero — título em 3 linhas "Seu site explica / o que você vende / em 10 segundos?" (última em degradê laranja), descrição curta e 2 botões, descrição, 3 benefícios e CTAs (WhatsApp e Ver projetos)
- Seção 2 da home (após o carrossel de logos): src/components/SecaoConexao.astro — texto à esquerda no estilo do hero ("Seu negócio, / site e redes / conectados"); à direita ilustração em código: caixa 3D (site em cima, acervo do negócio embaixo: lista, documentos, fotos, gráfico) ligada por linhas de luz animadas a cartões de vidro 3D das redes (Instagram, WhatsApp, Google)
- Faixa "Invisível não vende." (após a seção 2): src/components/FaixaInvisivel.astro — largura total, laranja escuro, faixa baixa (padding 40px), duas colunas: título + subtítulo; à direita composição de presença local (inspirada em referência, sem copiar): perfil no Google, 2 avaliações de clientes, cartão do site e celular 3D com o perfil e a distribuição das notas. Dados e nomes fictícios
- Sem linhas/bordas entre seções
- Menu minimalista (src/components/Header.astro): logo, links em pílula Início · Sobre · Sites · Lojas · Redes · Portfólio · Política (o ativo ganha contorno arredondado) e botão laranja "Fale conosco ↗" (/contato/). Sem faixa de serviços. Fundo translúcido com desfoque. Celular (< 900px): menu off-canvas
- Celular: tudo centralizado, margem lateral de 10px, sem nenhuma rolagem horizontal (html/body overflow-x:clip, sem carrosséis)

## Regras técnicas
- Layout próprio por dispositivo (bloco "LAYOUTS POR DISPOSITIVO" no fim de global.css): celular < 768 (menu off-canvas, conteúdo centralizado e empilhado, botões largos), tablet 768–1023 (2 colunas, hero centralizado), notebook 1024–1439 (3 colunas), desktop ≥ 1440 (tipografia maior, serviços em 5 colunas). O hero começa no aparelho de quem visita. /#menu abre o menu no celular
- Todo o conteúdo (cabeçalho, seções, rodapé) usa a largura total de 1140px (.wrap)
- Espaçamento entre seções igual no site todo: section{padding:var(--sec) 0}, --sec 40px (32px no celular). Exceção: hero → seção 1 = 20px
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
