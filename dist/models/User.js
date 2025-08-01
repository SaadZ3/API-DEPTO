"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '', // se não for informado, será vazio
        validate: {
          len: {
            args: [3, 255], // tamanho mínimo e máximo do nome
            msg: 'O nome deve ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Este email já está cadastrado.',
        },
        validate: {
          isEmail: {
            msg: 'O email informado não é válido.',
          },
        },
      },

      // campo para armazenar o hash da senha
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },

      // campo virtual para receber a senha em texto puro
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '', // se não for informado, será vazio
        validate: {
          len: {
            args: [6, 50], // tamanho mínimo e máximo do nome
            msg: 'A senha deve ter entre 6 e 50 caracteres.',
          },
        },
      },
    }, {
      sequelize, // passando a instância do sequelize
    });

    // Hook para criptografar a senha antes de salvar no banco de dados
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        // Verifica se a senha foi informada
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    // Método para verificar se a senha informada é válida
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
