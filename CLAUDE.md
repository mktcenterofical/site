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
- Fundo do site inteiro igual ao do hero: camada fixa .fundo-site (Base.astro + global.css) com brilhos laranja, grade e linhas de velocidade; seções sem fundo próprio
- Tema ESCURO no site todo (estilo do hero): fundo #090a0c, seções alternadas #111317 com grade sutil, texto #fff, texto secundário #aeb4bd, linhas #23262c
- Laranja em texto usa #ff8a24 (orange-text) no fundo escuro
- Botão laranja sempre com texto escuro #141006 (contraste)
- Fontes: Barlow Condensed (títulos), DM Sans (texto)
- Logo: "MKT CENTER Marketing Digital" (original referencia/logo-mkt-center.png) em public/logo-escuro.webp, fundo transparente, no cabeçalho, rodapé e og.png. logo-claro.webp fica para fundos claros. Originais em referencia/logo-fundo-*.png
- Hero da home: src/components/HeroCrescimento.astro — textos animados à esquerda; à direita os 4 aparelhos juntos (grafite escuro), cada um com um projeto fictício: desktop = ERP "Gestão Pro" (TelaErp.astro), notebook = site institucional Pão Dourado (TelaSite.astro), tablet = loja virtual RS Moda (Loja.astro), celular = app de delivery Sabor Já (TelaApp.astro). Um destaque percorre os aparelhos: o aparelho sobe, brilha e 2 produtos saltam da tela; no celular um toque no app dispara um aviso em todas as telas ao mesmo tempo e os contadores (.lj-qtd) sobem. Fotos em public/mock/ (Unsplash)
- Pé do hero: indicador "ROLE" com seta animada (tablet em diante), no pé do hero; o hero ocupa a tela toda (tablet em diante), então a seção 1 só aparece ao rolar, 20px abaixo. Clicável, leva a #servicos e some ao rolar
- Faixa de logos dos sites criados (src/components/Clientes.astro, logos em public/clientes/): sem título, espaçamento padrão de seção, carrossel lento (110s; 80s no celular) na largura do site, logos monocromáticas em cinza; ao passar o mouse/tocar mostram a cor original (sem fundo); cada logo leva ao site
- Ordem da home: hero → Serviços ("O que fazemos", 20px abaixo do hero) → seção 10 segundos → logos → seção 2 → faixa Invisível
- Seção 10 segundos: src/components/Secao10s.astro — esquerda: monitor e celular realistas (em código) montando o mesmo site + cronômetro grande realista que conta de 0 a 10 s e para no 10 com o site pronto (anima uma vez, quando visível); direita: no mesmo estilo do hero — título em 3 linhas "Seu site explica / o que você vende / em 10 segundos?" (última em degradê laranja), descrição curta e 2 botões, descrição, 3 benefícios e CTAs (WhatsApp e Ver projetos)
- Seção 2 da home (após o carrossel de logos): src/components/SecaoConexao.astro — texto à esquerda no estilo do hero ("Seu negócio, / site e redes / conectados"); à direita ilustração em código: caixa 3D (site em cima, acervo do negócio embaixo: lista, documentos, fotos, gráfico) ligada por linhas de luz animadas a cartões de vidro 3D das redes (Instagram, WhatsApp, Google)
- Faixa "Invisível não vende." (após a seção 2): src/components/FaixaInvisivel.astro — largura total, laranja escuro, faixa baixa (padding 40px), duas colunas: título + subtítulo; à direita composição de presença local (inspirada em referência, sem copiar): perfil no Google, 2 avaliações de clientes, cartão do site e celular 3D com o perfil e a distribuição das notas. Dados e nomes fictícios
- Sem linhas/bordas entre seções
- Sem seção de perguntas frequentes (FAQ) em nenhuma página, pedido do cliente
- Seção "Por que a MKT Center": src/components/PorQue.astro — título no padrão do site (eyebrow + h2), 6 cards menores numa linha só (3 por linha no tablet, 1 no celular): objeto 3D real em WebGL (Three.js, src/scripts/objetos3d.ts, carregado só quando a seção chega perto da tela): alvo, celular, chat, lupa, gráfico, cavalo de xadrez em metal escuro com detalhes laranja acesos, girando e seguindo o mouse com ondas de luz laranja, número, título, descrição e link
- Seção "Nossos preços" (após Por que a MKT): src/components/Precos.astro — carrossel numa linha (4 visíveis no computador, 2 no tablet, 1 no celular) com setas e rolagem lateral; 7 cards com selo, "A partir de" + preço, descrição, itens e botão "Falar sobre este plano" (WhatsApp); embaixo "Falar sobre meu projeto" e "Enviar briefing". Valores REAIS informados pelo cliente: Landing R$ 300, Institucional (até 4 págs) R$ 600, Profissional R$ 1.000, Redes R$ 400/mês, Vídeo R$ 50, Post R$ 30/card, Sistemas/Apps sob consulta
- Depoimentos: src/components/Depoimentos.astro — carrossel minimalista (3 visíveis, setas, arraste), 8 depoimentos FICTÍCIOS (trocar por reais)
- Rodapé (src/components/Footer.astro): fio laranja no topo, marca + texto + botão WhatsApp, colunas Navegação / Serviços / Contato (títulos laranja, sublinhado laranja no hover), ícones das redes (Instagram, Facebook, LinkedIn, YouTube, TikTok — links genéricos, trocar pelos perfis reais) e linha final com CNPJ, Política de privacidade, Termos de uso (/termos/, rascunho) e "Voltar ao topo"
- Página Quem somos: usa o MESMO hero da home (HeroCrescimento.astro com props rotulo/linhas/destaque/texto/bt1/bt2/numeros/rolarPara) com os textos da história desde 2013; o lado direito usa o slot "visual" com src/components/SanfonaEpocas.astro: sanfona de 5 painéis (2013 Lojas, 2016 Redes, 2018 Sites, 2020 Lives, 2026 Apps/IA), abre no hover/toque e avança sozinha; painel aberto mostra a tela animada da época (TelaEra.astro)
- Página Vídeos (src/pages/videos.astro): hero com EditorVideo.astro (editor em código: prévia 9:16 com cortes, zoom, legendas palavra a palavra, painel de cor e linha do tempo com playhead, tudo em CSS num ciclo de 12 s), tipos (edição R$ 50/vídeo real; anúncios e institucional sob consulta), antes e depois arrastável, 6 técnicas com prévia animada, seção Transmissão ao vivo (#ao-vivo: missas, cultos e eventos; mesa de corte em código com 4 câmeras, AO VIVO, letreiro, chat e redes), incluso, processo e depoimentos
- Página Redes (src/pages/redes-sociais.astro, menu Redes aponta para ela; /trafego-e-seo/ continua existindo): hero com carrossel dentro de uma moldura branca real de post do Instagram (perfil mktcenterdigital, botão Seguir, curtidas, legenda e hashtags; alinhada à borda direita do .wrap; 5 imagens escolhidas pelo cliente em public/mock/redes-perfil*.webp, setas, arraste, pontos, troca sozinha a cada 4 s; perfis de terceiros: confirmar direito de uso antes do lançamento; PainelRedes.astro, a central animada, fica guardado sem uso), 4 planos com preços reais (R$ 400/mês, R$ 30/card, R$ 50/vídeo, anúncios sob consulta), antes e depois do perfil arrastável, 6 entregas com prévia animada, incluso, processo e depoimentos
- Página Política (src/pages/marketing-politico.astro): hero com os 4 aparelhos mostrando os sites reais de campanha (Roberto Pires e Padre Kelmon), fases pré-campanha/campanha/mandato (sob consulta), o que fazemos, dentro da lei (TSE, LGPD), projetos políticos do portfólio (tipo com 'político'), processo
- Página Apps (src/pages/aplicativos-e-sistemas.astro, link Apps no menu depois de Lojas): hero com imagem de estilo escolhida pelo cliente (public/mock/apps-hero.webp, fundo removido, com a mesma altura da coluna de texto), carrossel dos projetos com tipo Aplicativo/Sistema (setas, 4 no computador), o que podemos criar, valor sob consulta, processo e carrossel "Sites que criamos" (todos os projetos que não são app). Print do Sistema RollerPort veio de imagem do cliente (tem login), fora do robô
- Página Portfólio: mesmo hero (HeroCrescimento com prop sites); cada aparelho mostra o print REAL de um site de cliente rolando devagar (public/portfolio/: Kimax no desktop, Pousada Anchieta no notebook, Pugas News no tablet, NanoDev no celular; TelaPrint.astro). Abaixo, grade "Sites que criamos" (3 por linha, 2 no tablet, 1 no celular) com CardPortfolio.astro: FOTO de referência do cliente (notebook + celular, public/portfolio/mockup-note-cel.webp, 368×288 base, recortada com fundo transparente sobre o fundo escuro do card) — não redesenhar os aparelhos; os prints reais (public/portfolio/<site>-lap/-cel.webp) entram nas telas por perspectiva (matrix3d calculado dos cantos medidos) e rolam no hover; lista em `projetos` no topo de portfolio.astro. Prints gerados com puppeteer (1280×800 e 390×844, sem cookies/flutuantes)
- Menu minimalista (src/components/Header.astro): logo, links em pílula Início · Sobre · Portfólio · Sites · Lojas · Apps · Vídeos (/videos/) · Redes · Política (o ativo ganha contorno arredondado) e botão laranja "Fale conosco ↗" (/contato/). Sem faixa de serviços. Fundo translúcido com desfoque. Celular (< 900px): menu off-canvas
- Celular: tudo centralizado, margem lateral de 10px, sem nenhuma rolagem horizontal (html/body overflow-x:clip, sem carrosséis)

## Regras técnicas
- Layout próprio por dispositivo (bloco "LAYOUTS POR DISPOSITIVO" no fim de global.css): celular < 768 (menu off-canvas, conteúdo centralizado e empilhado, botões largos), tablet 768–1023 (2 colunas, hero centralizado), notebook 1024–1439 (3 colunas), desktop ≥ 1440 (tipografia maior, serviços em 5 colunas). O hero começa no aparelho de quem visita. /#menu abre o menu no celular
- Todo o conteúdo (cabeçalho, seções, rodapé) usa a largura total de 1140px (.wrap)
- Serviços da home em bento grid (todos os dispositivos): 2 cards em cima à esquerda, 2 empilhados à direita, Marketing Político comprido embaixo (celular: 2+2+1)
- Faixa CTA "Vamos tirar seu projeto do papel?": faz parte do rodapé (Footer.astro inclui FaixaCTA no topo), aparece em todas as páginas; não usar FaixaCTA nas páginas. Texto e botões numa linha do tablet em diante
- Home por dispositivo: bloco "HOME — MODELO POR DISPOSITIVO" no fim de global.css (celular: serviços e Por que em 2 colunas, faixa Invisível reorganizada; tablet: seções empilhadas e centralizadas, serviços 3+2; notebook/desktop: 2 colunas lado a lado). Testar com puppeteer em 390/820/1280/1600
- Espaçamento entre seções igual no site todo: section{padding:var(--sec) 0}, --sec 40px (32px no celular). Exceção: hero → seção 1 = 20px
- Sem frameworks de JS no cliente; JS mínimo (exceção: Three.js ~130 KB gzip só nos objetos 3D da seção Por que, carregado sob demanda)
- Imagens em WebP/AVIF com width e height
- Cada página: title único (até 60 caracteres), meta description
  (até 155), um único H1, canonical, Open Graph e Schema JSON-LD
- Lighthouse mobile: meta 90+ em todas as categorias (home em 20/10/2026: 90/100/100/100). Fontes Google carregam sem bloquear (media=print onload) e CSS embutido (inlineStylesheets: always)
- Carrosséis: scroll-snap só liga após a primeira interação (classe .encaixe); ligado no carregamento ele rola sozinho e o Chrome deixa de medir o LCP
- Hero: animação de entrada do texto só desliza, sem opacity 0 (texto sempre visível)
- Toda página (menos a home) mostra a navegação "Início › Página atual" no topo: prop crumbs do Base.astro, em todos os dispositivos
- Prints do portfólio se atualizam sozinhos: scripts/atualizar-prints.mjs (puppeteer) abre cada site de src/data/projetos.ts todo dia às 6h pelo GitHub Actions (.github/workflows/atualizar-prints.yml), refaz os prints existentes (desk 1440, lap 1280, tab 768, cel 390; sem cookies e menus fixos) e só troca quando mudou mais de 1,2%; faz commit e publica na Vercel (segredo VERCEL_TOKEN no GitHub). RollerPort Relatórios fica fora (recorte manual). Rodar à mão: node scripts/atualizar-prints.mjs [site...] com CHROME_PATH no Windows
- Número do WhatsApp e dados da empresa ficam em src/config.ts
- Serviços ficam em src/data/servicos.ts (uma página por serviço via [servico].astro). Exceção: Sites (src/pages/criacao-de-sites.astro), Política (marketing-politico.astro) e Lojas (src/pages/loja-virtual.astro, mesmo modelo, preços sob consulta; à direita do hero VitrineLoja.astro: celular grafite com o site real da Kimax rolando e cartões de vidro com produtos reais da Kimax (public/kimax/), sem preços, flutuando em profundidades, seguindo o mouse) têm página própria; Sites: (hero da home com textos de sites, tipos de site com preços reais, logos, incluso, processo, depoimentos e carrossel dos sites institucionais do portfólio: 4 cards menores no computador, 2 no tablet, 1 no celular, setas e arraste)

## Textos
- Português do Brasil, frases curtas, sem jargão
- Nunca inventar números, depoimentos ou cases
- ATENÇÃO: contatos, preços, cases e depoimentos atuais são FICTÍCIOS (demo).
  Antes do lançamento oficial, trocar todos pelos reais.
