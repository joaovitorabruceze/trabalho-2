import { Router } from 'express';
import ProdutoController from '../src/app/controllers/produtoController.js';

const router = Router();

//Rotas produto
router.post('/Produtos', ProdutoController.store);
router.get('/Produtos', ProdutoController.index);
router.get('/Produtos/:id', ProdutoController.show);
router.put('/Produtos/:id', ProdutoController.update);
router.delete('/Produtos/:id', ProdutoController.delete);

export default router;