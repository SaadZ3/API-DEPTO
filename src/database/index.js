import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
// import Aluno from '../models/Aluno';
import Departamento from '../models/Departamento';
import User from '../models/User';
// import Foto from '../models/Foto';

const models = [Departamento, User];

const connection = new Sequelize(databaseConfig);

// Inicializando os modelos com a conexão do Sequelize
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
// verifcando se o model tem o método estático associate
