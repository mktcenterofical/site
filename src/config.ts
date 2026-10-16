// Dados da empresa. ATENÇÃO: valores fictícios para apresentação — trocar pelos reais.
export const config = {
  nome: 'MKT Center',
  whatsapp: '5511999999999', // só números, com DDI 55 + DDD
  whatsappMsg: 'Olá! Vim pelo site da MKT Center e quero um orçamento.',
  telefone: '(11) 99999-9999',
  email: 'contato@mktcenter.com.br',
  cnpj: '00.000.000/0001-00',
  horario: 'Seg a sex, 9h às 18h',
  cidade: 'São Paulo - SP',
  instagram: '@mktcenter',
};
export const waLink = (msg = config.whatsappMsg) =>
  `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(msg)}`;
