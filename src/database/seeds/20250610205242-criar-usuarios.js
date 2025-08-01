// /** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Luiz Otávio',
          email: 'luiz@email.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz Otávio 2',
          email: 'luiz2@email.com',
          password_hash: await bcrypt.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz Otávio 3',
          email: 'luiz3@email.com',
          password_hash: await bcrypt.hash('123457', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
