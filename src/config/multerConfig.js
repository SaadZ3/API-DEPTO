import multer from 'multer';

// extname pega a extensão do arquivo
// resolve cria o caminho absoluto do arquivo
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  // função que filtra os arquivos
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'));
    }

    return cb(null, true);
  },

  // armazena os arquivos no disco
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // indo para a pasta uploads/images
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    // gerando um novo nome para o arquivo, para evitar conflitos
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
