import { Router } from 'express';
import ProdutoController from './app/controllers/ProdutoController.js';
import UsuarioController from './app/controllers/UsuarioController.js';
import CompraController from './app/controllers/CompraController.js';
import DevolucaoController from './app/controllers/DevolucaoController.js';

const router = Router();

//Rotas produto
router.post('/trabalho2/produtos', ProdutoController.store);
router.get('/trabalho2/produtos', ProdutoController.index);
router.get('/trabalho2/produtos/:id', ProdutoController.show);
router.put('/trabalho2/produtos/:id', ProdutoController.update);
router.delete('/trabalho2/produtos/:id', ProdutoController.delete);

//Rotas usuário
router.post('/trabalho2/usuarios', UsuarioController.store);
router.get('/trabalho2/usuarios', UsuarioController.index);
router.get('/trabalho2/usuarios/:id', UsuarioController.show);
router.put('/trabalho2/usuarios/:id', UsuarioController.update);
router.delete('/trabalho2/usuarios/:id', UsuarioController.delete);

//Rota compra
router.post('/trabalho2/compras', CompraController.buy);
router.get('/trabalho2/compras', CompraController.list);

//Rota devolução
router.put('/trabalho2/devolucao/:id', DevolucaoController.restore);

export default router;