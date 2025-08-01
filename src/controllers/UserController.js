import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const {
        id, nome, email, role,
      } = novoUser; // Desestruturando os campos que queremos retornar
      return res.json({
        id, nome, email, role,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      // Busca todos os usuários, mas foi filtrado apenas os campos id, nome e email
      const users = await User.findAll({ attributes: ['id', 'nome', 'email', 'role'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const {
        id, nome, email, role,
      } = user;
      return res.json({
        id, nome, email, role,
      });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await user.update(req.body);
      const {
        id, nome, email, role,
      } = novosDados; // Desestruturando os campos que queremos retornar

      return res.json({
        id, nome, email, role,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      // Verifica se o ID foi enviado

      const user = await User.findByPk(req.userId);

      // Verifica se o usuário existe
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();
      return res.json('usuario deletado com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

// exportando a classe ja instanciada
export default new UserController();
