/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // editando a coluna email da tabela 'alunos' para ser unique
    await queryInterface.addColumn('users', 'role', {
      type: Sequelize.ENUM('aluno', 'professor'),
      allowNull: false,
      defaultValue: 'aluno',
    });
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
