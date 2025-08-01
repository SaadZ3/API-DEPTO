// lembrando que migrations são scripts que definem como o banco de dados deve ser alterado
// como a criação de tabelas, adição de colunas, etc.
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('fotos', {
    // criação campo id
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    originalname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    aluno_id: {
      type: Sequelize.INTEGER,
      allowNull: true, // pode ser nulo, pois o aluno pode não ter foto
      references: {
        model: 'alunos', // nome da tabela referenciada
        key: 'id', // chave primária da tabela referenciada
      },
      onDelete: 'SET NULL', // se o aluno for deletado, a foto não será deletada, mas o aluno_id será setado como NULL
      onUpdate: 'CASCADE', // atualiza se o aluno for atualizado
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('fotos'),
};
