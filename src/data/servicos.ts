export type Servico = {
  slug: string; nome: string; curto: string; icone: string;
  title: string; description: string; h1: string; intro: string;
  itens: string[]; etapas: string[]; faq: [string, string][];
};

export const servicos: Servico[] = [
  {
    slug: 'criacao-de-sites', nome: 'Criação de Sites', icone: 'globe',
    curto: 'Sites rápidos, bonitos no celular e prontos para aparecer no Google.',
    title: 'Criação de Sites Profissionais | MKT Center',
    description: 'Criação de sites rápidos, responsivos e otimizados para o Google. Peça seu orçamento pelo WhatsApp com a MKT Center.',
    h1: 'Criação de sites que viram clientes',
    intro: 'Seu site é o seu vendedor que trabalha 24 horas. Fazemos sites leves, que abrem rápido no celular e levam o visitante direto para o WhatsApp.',
    itens: ['Design exclusivo com a sua marca', 'Pensado primeiro para o celular', 'SEO básico e Google Analytics', 'Botão de WhatsApp e formulário', 'Domínio, hospedagem e HTTPS', 'Treinamento para atualizar'],
    etapas: ['Conversa sobre o seu negócio', 'Proposta e layout', 'Desenvolvimento e textos', 'Publicação e acompanhamento'],
    faq: [
      ['Quanto tempo leva para ficar pronto?', 'Depende do tamanho do projeto. O prazo exato vai na proposta, antes de começar.'],
      ['Eu consigo atualizar o site depois?', 'Sim. Entregamos com treinamento e também oferecemos planos de manutenção.'],
      ['O site aparece no Google?', 'Sim. Todo site sai com a estrutura de SEO pronta para ser indexado.'],
    ],
  },
  {
    slug: 'aplicativos-e-sistemas', nome: 'Aplicativos e Sistemas', icone: 'smartphone',
    curto: 'Apps e sistemas sob medida para organizar e escalar sua operação.',
    title: 'Aplicativos e Sistemas sob Medida | MKT Center',
    description: 'Desenvolvimento de aplicativos e sistemas web sob medida para sua empresa. Fale com a MKT Center e tire sua ideia do papel.',
    h1: 'Desenvolvimento de aplicativos e sistemas',
    intro: 'Agendamentos, pedidos, painéis, áreas de cliente. Criamos a ferramenta que a sua empresa precisa, do jeito que ela trabalha.',
    itens: ['Aplicativos para Android e iPhone', 'Sistemas web e painéis', 'Integrações com WhatsApp e pagamentos', 'Área do cliente com login', 'Relatórios e indicadores', 'Suporte e evolução contínua'],
    etapas: ['Entendimento do processo', 'Protótipo navegável', 'Desenvolvimento por etapas', 'Lançamento e suporte'],
    faq: [],
  },
  {
    slug: 'loja-virtual', nome: 'Lojas Virtuais', icone: 'cart',
    curto: 'E-commerce completo com pagamento, frete e gestão de pedidos.',
    title: 'Criação de Loja Virtual | MKT Center',
    description: 'Criação de loja virtual com Pix, cartão, frete e gestão de pedidos. Comece a vender online com a MKT Center.',
    h1: 'Criação de loja virtual para vender todos os dias',
    intro: 'Coloque seus produtos na internet com uma loja fácil de comprar pelo celular e fácil de gerenciar por você.',
    itens: ['Pagamento por Pix, cartão e boleto', 'Cálculo de frete automático', 'Cadastro de produtos simples', 'Integração com Instagram e Google', 'Cupons e promoções', 'Relatório de vendas'],
    etapas: ['Planejamento do catálogo', 'Montagem da loja', 'Configuração de pagamento e frete', 'Lançamento e anúncios'],
    faq: [
      ['Preciso ter CNPJ?', 'Os meios de pagamento podem exigir. Explicamos as opções na conversa inicial.'],
      ['Posso vender também pelo Instagram?', 'Sim. A loja pode ser conectada ao catálogo do Instagram e do Facebook.'],
    ],
  },
  {
    slug: 'trafego-e-seo', nome: 'Tráfego e SEO', icone: 'trending',
    curto: 'Anúncios no Google e Meta e SEO para trazer clientes todo mês.',
    title: 'Gestão de Tráfego Pago e SEO - Google e Mais Clientes | MKT Center',
    description: 'Atraia potenciais clientes com campanhas de anúncios e otimização para mecanismos de busca. Conheça as soluções de tráfego pago e SEO da MKT Center.',
    h1: 'Gestão de tráfego pago e SEO',
    intro: 'Anúncios bem feitos trazem contatos agora. SEO traz contatos por muito tempo. Cuidamos dos dois e mostramos os resultados em relatório.',
    itens: ['Google Ads e Meta Ads', 'Campanhas para WhatsApp', 'SEO local e Perfil da Empresa', 'Páginas de captura', 'Pixel e Analytics configurados', 'Relatório mensal claro'],
    etapas: ['Diagnóstico', 'Estratégia e público', 'Campanhas no ar', 'Otimização mensal'],
    faq: [],
  },
  {
    slug: 'marketing-politico', nome: 'Marketing Político', icone: 'landmark',
    curto: 'Presença digital para candidatos e mandatos, de todos os partidos.',
    title: 'Marketing Político Digital | MKT Center',
    description: 'Marketing político digital para candidatos e mandatos de todos os partidos, dentro das regras do TSE. Fale com a MKT Center.',
    h1: 'Marketing político digital',
    intro: 'Site, redes sociais e anúncios para pré-candidatos, candidatos e mandatos. Atendemos todos os partidos, sempre dentro das regras eleitorais.',
    itens: ['Site do candidato ou do mandato', 'Gestão de redes sociais', 'Impulsionamento conforme o TSE', 'Identidade visual de campanha', 'Prestação de contas do mandato', 'Monitoramento de presença digital'],
    etapas: ['Diagnóstico e posicionamento', 'Planejamento de conteúdo', 'Execução e anúncios', 'Acompanhamento'],
    faq: [
      ['Vocês atendem qualquer partido?', 'Sim. Atendemos candidatos e mandatos de todos os partidos.'],
      ['O trabalho segue a legislação eleitoral?', 'Sim. Seguimos as resoluções do TSE em vigor em cada eleição.'],
    ],
  },
];
