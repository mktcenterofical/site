# Site MKT Center

## Negócio
Agência de marketing digital: sites, aplicativos, sistemas,
lojas virtuais, tráfego/SEO e marketing político (todos os partidos).
Público: donos de comércio, empresas e políticos. Maioria no celular.
Objetivo do site: gerar contatos pelo WhatsApp e pelo formulário.

## Marca
- Laranja #ff6900 (destaques e botões, no máximo ~10% da tela)
- Tema CLARO: fundo branco, seções alternadas #f3f4f5, texto #111317, texto secundário #545a63
- Laranja em texto pequeno usa #b84a00 (contraste no fundo claro)
- Botão laranja sempre com texto escuro #141006 (contraste)
- Fontes: Barlow Condensed (títulos), DM Sans (texto)
- Logo: public/logo.webp (topo e rodapé), logo-grande.webp no hero da home
- Menu sem submenus (links simples)

## Regras técnicas
- Mobile-first; testar sempre em 390px de largura
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
