"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    // editando a coluna email da tabela 'alunos' para ser unique
    await queryInterface.changeColumn('alunos', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  async down() {},
};
