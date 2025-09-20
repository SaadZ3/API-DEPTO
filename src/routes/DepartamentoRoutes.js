import { Router } from 'express';
import departamentoController from '../controllers/DepartamentoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', departamentoController.index);
router.post('/', loginRequired, departamentoController.store);
router.put('/:id', loginRequired, departamentoController.update);
router.get('/:id', departamentoController.show);
router.delete('/:id', loginRequired, departamentoController.delete);

export default router;
