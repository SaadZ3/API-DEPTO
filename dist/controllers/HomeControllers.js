"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    res.json('index');
  }
}

// exportando a classe ja instanciada
exports. default = new HomeController();
