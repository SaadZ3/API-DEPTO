/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.dropTable('fotos');
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
