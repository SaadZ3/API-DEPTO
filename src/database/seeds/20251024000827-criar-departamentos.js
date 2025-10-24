/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // 12 andares
    const andares = [
      '1º Sub-solo',
      'Térreo',
      '1º Andar',
      '2º Andar',
      '3º Andar',
      '4º Andar',
      '5º Andar',
      '6º Andar',
      '7º Andar',
      '8º Andar',
      '9º Andar',
      '10º Andar',
    ]; //

    // 36 departamentos (3 por andar)
    const titulosReais = [
      // 1º Sub-solo
      'Almoxarifado',
      'Manutenção Predial',
      'Expedição',
      // Térreo
      'Recepção',
      'Segurança Patrimonial',
      'Serviços Gerais',
      // 1º Andar
      'Recursos Humanos',
      'Departamento Pessoal',
      'Treinamento e Desenvolvimento',
      // 2º Andar
      'Tecnologia da Informação (TI)',
      'Infraestrutura de TI',
      'Suporte Técnico (Help Desk)',
      // 3º Andar
      'Desenvolvimento de Software',
      'Qualidade (QA)',
      'Banco de Dados (DBA)',
      // 4º Andar
      'Financeiro',
      'Contas a Pagar',
      'Contas a Receber',
      // 5º Andar
      'Contabilidade',
      'Fiscal',
      'Controladoria',
      // 6º Andar
      'Marketing',
      'Marketing Digital',
      'Endomarketing',
      // 7º Andar
      'Comunicação Interna',
      'Relações Públicas',
      'Design Gráfico',
      // 8º Andar
      'Vendas',
      'Comercial',
      'Atendimento ao Cliente (SAC)',
      // 9º Andar
      'Jurídico',
      'Compliance',
      'Auditoria Interna',
      // 10º Andar
      'Diretoria Executiva',
      'Presidência',
      'Planejamento Estratégico',
    ];

    const departamentos = [];
    const ramalCounter = 1000;
    let deptoIndex = 0;

    // Itera sobre os andares
    // eslint-disable-next-line no-restricted-syntax
    for (const andar of andares) {
      // Cria 3 departamentos para o andar atual
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 3; i++) {
        const titulo = titulosReais[deptoIndex];

        // Remove caracteres especiais e espaços para criar um email
        const emailAlias = titulo
          .toLowerCase()
          .replace(/\s/g, '-') // substitui espaço por hífen
          .replace(/[().,]/g, '') // remove parênteses, pontos, vírgulas
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, ''); // remove acentos

        const email = `${emailAlias}@empresa.com`;
        const ramal = `${ramalCounter + deptoIndex}`;
        // eslint-disable-next-line max-len
        const sala = (andares.indexOf(andar) * 100) + i + 1; // Ex: Térreo (índice 1) -> Sala 101, 102, 103

        departamentos.push({
          titulo,
          texto_principal: titulo,
          ramal, //
          email, //
          funcionarios: 'Alice Silva, Bruno Costa, Carla Dias',
          andar, //
          complemento: `Sala ${sala}`,
          created_at: new Date(),
          updated_at: new Date(),
        });

        // eslint-disable-next-line no-plusplus
        deptoIndex++;
      }
    }

    await queryInterface.bulkInsert(
      'departamentos', //
      departamentos,
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('departamentos', null, {});
  },
};
