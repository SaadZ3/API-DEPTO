/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.dropTable('departamentos');
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
