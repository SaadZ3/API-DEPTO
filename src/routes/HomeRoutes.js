import { Router } from 'express';
import homeController from '../controllers/HomeControllers';

const router = new Router();

router.get('/', homeController.index);

// Exportando o router para ser usado no app.js
export default router;
