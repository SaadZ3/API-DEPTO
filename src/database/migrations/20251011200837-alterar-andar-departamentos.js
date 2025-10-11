/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // SEU CÓDIGO DA FUNÇÃO 'up' VEM AQUI
    // ...
    await queryInterface.removeColumn('departamentos', 'andar');
    await queryInterface.addColumn('departamentos', 'andar', {
      type: Sequelize.ENUM(
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
      ),
      allowNull: false,
      defaultValue: 'Térreo',
    });
    await queryInterface.addColumn('departamentos', 'complemento', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    // ...
  },

  down: async (queryInterface, Sequelize) => {
    // SEU CÓDIGO DA FUNÇÃO 'down' VEM AQUI
    // ...
    await queryInterface.removeColumn('departamentos', 'andar');
    await queryInterface.removeColumn('departamentos', 'complemento');
    await queryInterface.addColumn('departamentos', 'andar', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    // ...
  },
};
