// import multer from 'multer';
// import multerConfig from '../config/multerConfig';

// import Foto from '../models/Foto';

// const upload = multer(multerConfig).single('foto');

// class FotoController {
//   store(req, res) {
//     // upload é uma função do multer para tratar o erro de upload
//     return upload(req, res, async (error) => {
//       if (error) {
//         return res.status(400).json({
//           errors: [error.code],
//         });
//       }

//       try {
//         const { originalname, filename } = req.file;
//         const { aluno_id } = req.body;

//         // salvando os dados da foto no banco de dados
//         const foto = await Foto.create({ originalname, filename, aluno_id });

//         return res.json(foto);
//       } catch (e) {
//         return res.status(400).json({
//           errors: ['Aluno não existe'],
//         });
//       }
//     });
//   }
// }

// export default new FotoController();
