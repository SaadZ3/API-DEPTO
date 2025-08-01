import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio.',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio.',
          },
        },
      },
      url: { // url é para poder ser a foto ser visualizada no frontend
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`; // criando a url
        },
      },
    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  // define uma associação: esse modelo Foto pertence a um Aluno
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    // esse associate é executado no index.js
  }
}
