import { Router } from "express";

import { CreateProdutosController, DeleteProdutosController, GetAllProdutosController, GetOneProdutosController, UpdateProdutosController } from "../controllers/ProdutoController";

const getAllProdutos = new GetAllProdutosController();
const getOneProdutos = new GetOneProdutosController();
const updateProdutos = new UpdateProdutosController();
const createProdutos = new CreateProdutosController();
const deleteProdutos = new DeleteProdutosController();
const produtoRoute = Router();


// Rota para testar o servidor
produtoRoute.get('/', getAllProdutos.handle);

produtoRoute.get('/:id', getOneProdutos.handle);

produtoRoute.put('/', updateProdutos.handle);

produtoRoute.post('/', createProdutos.handle);

produtoRoute.delete('/:id', deleteProdutos.handle);

export { produtoRoute };
