/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn('departamentos', 'fucnionarios', 'funcionarios');
  },

  async down(queryInterface) {
    await queryInterface.renameColumn('departamentos', 'funcionarios', 'fucnionarios');
  },
};
