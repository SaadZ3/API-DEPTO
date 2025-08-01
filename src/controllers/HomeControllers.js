class HomeController {
  async index(req, res) {
    res.json('index');
  }
}

// exportando a classe ja instanciada
export default new HomeController();
