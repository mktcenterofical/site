# Site MKT Center

## Negócio
Agência de marketing digital: sites, aplicativos, sistemas,
lojas virtuais, tráfego/SEO e marketing político (todos os partidos).
Público: donos de comércio, empresas e políticos. Maioria no celular.
Objetivo do site: gerar contatos pelo WhatsApp e pelo formulário.

## Marca
- Laranja #ff6900 (destaques e botões, no máximo ~10% da tela)
- Preto #090a0c, grafite #111317, papel #f3f4f5, prata #aeb4bd
- Botão laranja sempre com texto escuro #141006 (contraste)
- Fontes: Barlow Condensed (títulos), DM Sans (texto)
- Emblema 3D só no topo da home; logo plana no resto

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
