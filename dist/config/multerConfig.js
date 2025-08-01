"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

// extname pega a extensão do arquivo
// resolve cria o caminho absoluto do arquivo
var _path = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  // função que filtra os arquivos
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('Arquivo precisa ser PNG ou JPG.'));
    }

    return cb(null, true);
  },

  // armazena os arquivos no disco
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      // indo para a pasta uploads/images
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));
    },
    // gerando um novo nome para o arquivo, para evitar conflitos
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};
