import Sequelize, { Model } from 'sequelize';

export default class Departamento extends Model {
  static init(sequelize) {
    super.init({
      titulo: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O titulo precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      TextoPrincipal: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O texto principal precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      ramal: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Ramal já cadastrado',
        },
        validate: {
          len: {
            args: [3, 255],
            msg: 'Os ramais precisam ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já cadastrado',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      funcionarios: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 655],
            msg: 'O campo funcionarios ultapassou o limite.',
          },
        },
      },
      andar: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'O andar precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
