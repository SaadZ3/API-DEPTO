"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

 class Foto extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio.',
          },
        },
      },
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio.',
          },
        },
      },
      url: { // url é para poder ser a foto ser visualizada no frontend
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `${_appConfig2.default.url}/images/${this.getDataValue('filename')}`; // criando a url
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
} exports.default = Foto;
