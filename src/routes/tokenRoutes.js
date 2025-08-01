import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

// Exportando o router para ser usado no app.js
export default router;
