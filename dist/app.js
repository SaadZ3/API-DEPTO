"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database'); // Importa a configuração do banco de dados e inicializa os modelos

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors); // Importa o middleware CORS para permitir requisições de diferentes origens
var _expressdelay = require('express-delay'); var _expressdelay2 = _interopRequireDefault(_expressdelay); // Importa o middleware de delay para simular latência

var _HomeRoutes = require('./routes/HomeRoutes'); var _HomeRoutes2 = _interopRequireDefault(_HomeRoutes);
var _UserRoutes = require('./routes/UserRoutes'); var _UserRoutes2 = _interopRequireDefault(_UserRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _AlunoRoutes = require('./routes/AlunoRoutes'); var _AlunoRoutes2 = _interopRequireDefault(_AlunoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

const whiteList = [
  'https://react-api-ten-coral.vercel.app',
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_expressdelay2.default.call(void 0, 1500)); // Adiciona um delay de 1 segundo em todas as requisições
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images'))); // Serve arquivos estáticos da pasta uploads
  }

  routes() {
    this.app.use('/', _HomeRoutes2.default);
    this.app.use('/users/', _UserRoutes2.default);
    this.app.use('/tokens/', _tokenRoutes2.default);
    this.app.use('/alunos/', _AlunoRoutes2.default);
    this.app.use('/fotos/', _fotoRoutes2.default);
  }
}
// exportando a classe
exports. default = new App().app;
