// Dados da empresa. ATENÇÃO: valores fictícios para apresentação — trocar pelos reais.
export const config = {
  nome: 'MKT Center',
  whatsapp: '5511914319496', // só números, com DDI 55 + DDD
  whatsappMsg: 'Olá! Vim pelo site da MKT Center e quero um orçamento.',
  telefone: '(11) 91431-9496',
  email: 'contato@mktcenter.com.br',
  cnpj: '17.474.200/0001-89',
  horario: 'Seg a sex, 9h às 18h',
  cidade: 'São Paulo - SP',
  instagram: '@mktcenterofical',
  redes: [
    'https://www.instagram.com/mktcenterofical/',
    'https://www.facebook.com/mktcenteroficial',
    'https://www.linkedin.com/in/mktcenteroficial',
    'https://www.youtube.com/@mktcenteroficial',
    'https://www.tiktok.com/@mktcenteroficial',
  ],
};
export const waLink = (msg = config.whatsappMsg) =>
  `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(msg)}`;
