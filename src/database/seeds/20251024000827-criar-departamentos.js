/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
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
    ];

    const departamentos = [];
    let ramalCounter = 1000; // Contador inicial para ramais únicos
    let emailCounter = 1; // Contador inicial para emails únicos

    andares.forEach((andar) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= 3; i++) {
        const titulo = `Departamento ${i} ${andar}`;
        const email = `depto${emailCounter}@email.com`;
        const ramal = `${ramalCounter}`;

        departamentos.push({
          titulo,
          texto_principal: `Este é o texto principal do ${titulo}.`,
          ramal,
          email,
          funcionarios: 'Funcionario A, Funcionario B, Funcionario C',
          andar,
          complemento: `Sala ${i}`,
          created_at: new Date(),
          updated_at: new Date(),
        });

        // eslint-disable-next-line no-plusplus
        ramalCounter++;
        // eslint-disable-next-line no-plusplus
        emailCounter++;
      }
    });

    await queryInterface.bulkInsert(
      'departamentos',
      departamentos,
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('departamentos', null, {});
  },
};
