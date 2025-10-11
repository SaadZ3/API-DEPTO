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
      texto_principal: {
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
            args: [0, 655],
            msg: 'O campo funcionarios ultapassou o limite.',
          },
        },
      },
      andar: {
        type: Sequelize.ENUM(
          '1º Sub-solo',
          'Térreo',
          '1º Andar',
          '2º Andar',
          '3º Andar',
          '4º Andar',
          '5º Andar',
          '6º Andar',
          '7º Andar',
          '8º Andar',
          '9º Andar',
          '10º Andar',
        ),
        defaultValue: 'Térreo',
      },
      complemento: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
      tableName: 'departamentos',
    });
    return this;
  }
}
