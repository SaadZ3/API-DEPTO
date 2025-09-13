import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database'; // Importa a configuração do banco de dados e inicializa os modelos

import express from 'express';
import cors from 'cors'; // Importa o middleware CORS para permitir requisições de diferentes origens
import delay from 'express-delay'; // Importa o middleware de delay para simular latência

import homeRoutes from './routes/HomeRoutes';
import userRoutes from './routes/UserRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/AlunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whiteList = [
  'https://react-api-depto.vercel.app', // aqui vem a url do vercel com react
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
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(delay(200)); // Adiciona um delay de 1 segundo em todas as requisições
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images'))); // Serve arquivos estáticos da pasta uploads
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}
// exportando a classe
export default new App().app;
