import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// em um sitema real, o index e show nao deveriam existir
router.get('/', userController.index); // Rota para listar todos os usuários
// router.get('/:id', userController.show); // Rota para mostrar um usuário específico

router.post('/', userController.store); // Rota para criar um novo usuário
router.put('/', loginRequired, userController.update); // Rota para atualizar um usuário específico
router.delete('/', loginRequired, userController.delete); // Rota para deletar um usuário específico

// Exportando o router para ser usado no app.js
export default router;

/*
index --> lista todos os usuários --> GET /users
store/create --> cria um novo usuário --> POST /users
delete --> deleta um usuário --> DELETE /users/:id
show --> mostra um usuário específico --> GET /users/:id
update --> atualiza um usuário específico --> PATCH ou PUT /users/:id
*/
