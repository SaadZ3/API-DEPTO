import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '', // se não for informado, será vazio
        validate: {
          len: {
            args: [3, 255], // tamanho mínimo e máximo do nome
            msg: 'O nome deve ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaultValue: '',
      },

      // campo virtual para receber a senha em texto puro
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '', // se não for informado, será vazio
        validate: {
          len: {
            args: [6, 50], // tamanho mínimo e máximo do nome
            msg: 'A senha deve ter entre 6 e 50 caracteres.',
          },
        },
      },
      role: {
        type: Sequelize.ENUM('aluno', 'professor'), // define os papéis possíveis
        allowNull: false,
        defaultValue: 'aluno',
        validate: {
          isIn: {
            args: [['aluno', 'professor']],
            msg: 'O tipo de usuário deve ser "aluno" ou "professor".',
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
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    // Método para verificar se a senha informada é válida
    return bcryptjs.compare(password, this.password_hash);
  }
}
