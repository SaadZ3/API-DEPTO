"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers; // pega o token do header Authorization

  // verifica se o token foi enviado
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  // divide o token em duas partes: Bearer e o token
  const [, token] = authorization.split(' ');

  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    // verifica se o usuário ainda existe no banco de dados
    const user = await _User2.default.findOne({
      where: {
        id,
        email,
      },
    });
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    // adiciona o id e o email do usuário na requisição
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) { // se chegou no catch, o token é inválido ou expirou
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
