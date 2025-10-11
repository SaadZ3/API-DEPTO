/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove a coluna 'andar' antiga
    await queryInterface.removeColumn('departamentos', 'andar');

    // Adiciona a nova coluna 'andar' com as opções predefinidas
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
      defaultValue: 'Térreo', // Define um valor padrão
    });

    // Adiciona a coluna 'complemento'
    await queryInterface.addColumn('departamentos', 'complemento', {
      type: Sequelize.STRING,
      allowNull: true, // Permite que seja nulo
    });
  },

  async down(queryInterface, Sequelize) {
    // Reverte as alterações
    await queryInterface.removeColumn('departamentos', 'andar');
    await queryInterface.removeColumn('departamentos', 'complemento');

    // Adiciona a coluna 'andar' antiga de volta
    await queryInterface.addColumn('departamentos', 'andar', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
