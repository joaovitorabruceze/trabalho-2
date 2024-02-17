import { Router } from 'express';
import ProdutoController from '../src/app/controllers/produtoController.js';
import UsuarioController from './app/controllers/UsuarioController.js';

const router = Router();

//Rotas produto
router.post('/produtos', ProdutoController.store);
router.get('/produtos', ProdutoController.index);
router.get('/produtos/:id', ProdutoController.show);
router.put('/produtos/:id', ProdutoController.update);
router.delete('/produtos/:id', ProdutoController.delete);

//Rotas usuário
router.post('/usuarios', UsuarioController.store);
router.get('/usuarios', UsuarioController.index);
router.get('/usuarios/:id', UsuarioController.show);
router.put('/usuarios/:id', UsuarioController.update);
router.delete('/usuarios/:id', UsuarioController.delete);

export default router;