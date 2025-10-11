/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('departamentos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      texto_principal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ramal: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      funcionarios: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      andar: {
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
        defaultValue: 'Térreo', // Define um valor padrão
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('departamentos');
  },
};
