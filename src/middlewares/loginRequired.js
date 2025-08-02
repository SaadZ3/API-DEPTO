import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
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
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    // verifica se o usuário ainda existe no banco de dados
    const user = await User.findOne({
      where: {
        id,
        email,
        // role,
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
    // req.userRole = role;

    return next();
  } catch (e) { // se chegou no catch, o token é inválido ou expirou
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
