import Departamento from '../models/Departamento';

class DepartamentoController {
  async index(req, res) {
    const deptos = await Departamento.findAll({
      attributes: ['id', 'titulo', 'texto_principal', 'ramal', 'email', 'funcionarios', 'andar', 'complemento'],
      order: [['id', 'DESC']], // ordenando por id de forma decrescente
    });
    res.json(deptos);
  }

  async store(req, res) {
    try {
      const depto = await Departamento.create(req.body);

      return res.json(depto);
    } catch (e) {
      console.error(e); // log no console para debug

      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : [e.message],
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params; // id do departamento a ser buscado

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const depto = await Departamento.findByPk(id, {
        attributes: ['id', 'titulo', 'texto_principal', 'ramal', 'email', 'funcionarios', 'andar', 'complemento'],
        order: [['id', 'DESC']], // ordenando por id de forma decrescente
      });

      if (!depto) {
        return res.status(400).json({
          errors: ['Departamento não existe'],
        });
      }

      return res.json(depto);
    } catch (e) {
      console.error(e);
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : [e.message],
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const depto = await Departamento.findByPk(id);

      if (!depto) {
        return res.status(400).json({
          errors: ['Departamento não existe'],
        });
      }

      await depto.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      console.error(e);
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : [e.message],
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const depto = await Departamento.findByPk(id);

      if (!depto) {
        return res.status(400).json({
          errors: ['Departamento não existe'],
        });
      }

      const deptoAtualizado = await depto.update(req.body);
      return res.json(deptoAtualizado);
    } catch (e) {
      console.error(e);
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : [e.message],
      });
    }
  }
}

// exportando a classe ja instanciada
export default new DepartamentoController();
