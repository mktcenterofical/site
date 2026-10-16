// Dados da empresa — substitua os valores [A DEFINIR] pelos reais.
export const config = {
  nome: 'MKT Center',
  whatsapp: '5500000000000', // só números, com DDI 55 + DDD
  whatsappMsg: 'Olá! Vim pelo site da MKT Center e quero um orçamento.',
  telefone: '[A DEFINIR]',
  email: '[A DEFINIR]',
  cnpj: '[A DEFINIR]',
  horario: 'Seg a sex, 9h às 18h',
  cidade: '[A DEFINIR]',
  instagram: '',
};
export const waLink = (msg = config.whatsappMsg) =>
  `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(msg)}`;
