"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// em um sitema real, o index e show nao deveriam existir
router.get('/', _UserController2.default.index); // Rota para listar todos os usuários
// router.get('/:id', userController.show); // Rota para mostrar um usuário específico

router.post('/', _UserController2.default.store); // Rota para criar um novo usuário
router.put('/', _loginRequired2.default, _UserController2.default.update); // Rota para atualizar um usuário específico
router.delete('/', _loginRequired2.default, _UserController2.default.delete); // Rota para deletar um usuário específico

// Exportando o router para ser usado no app.js
exports. default = router;

/*
index --> lista todos os usuários --> GET /users
store/create --> cria um novo usuário --> POST /users
delete --> deleta um usuário --> DELETE /users/:id
show --> mostra um usuário específico --> GET /users/:id
update --> atualiza um usuário específico --> PATCH ou PUT /users/:id
*/
