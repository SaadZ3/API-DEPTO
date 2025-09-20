/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn('departamentos', 'TextoPrincipal', 'texto_principal');
    await queryInterface.renameColumn('departamentos', 'funcnionarios', 'funcionarios');
  },

  async down(queryInterface) {
    await queryInterface.renameColumn('departamentos', 'texto_principal', 'TextoPrincipal');
    await queryInterface.renameColumn('departamentos', 'funcionarios', 'funcnionarios');
  },
};
