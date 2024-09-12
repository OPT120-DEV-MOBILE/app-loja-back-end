import { Router } from "express";

import { CreateProdutosController, DeleteProdutosController, GetAllProdutosController, GetOneProdutosController, UpdateProdutosController } from "../controllers/ProdutoController";

const getAllProdutos = new GetAllProdutosController();
const getOneProdutos = new GetOneProdutosController();
const updateProdutos = new UpdateProdutosController();
const createProdutos = new CreateProdutosController();
const deleteProdutos = new DeleteProdutosController();
const produtoRoute = Router();


/**
 * @swagger
 * tags:
 *   - name: Produtos
 *     description: Operações relacionadas aos produtos
 */


/**
 * @swagger
 * /produtos/:
 *   get:
 *     tags:
 *       - Produtos
 *     summary: Listar todos os produtos
 *     description: Retorna uma lista de todos os produtos registrados no sistema
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do produto
 *                   nome:
 *                     type: string
 *                     description: Nome do produto
 *                   preco:
 *                     type: number
 *                     format: float
 *                     description: Preço do produto
 *                   descricao:
 *                     type: string
 *                     description: Descrição do produto
 *       401:
 *         description: Token JWT ausente ou inválido
 */
produtoRoute.get('/', getAllProdutos.handle);


/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     tags:
 *       - Produtos
 *     summary: Obter um produto específico
 *     description: Retorna os detalhes de um produto com base no ID fornecido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produto a ser retornado
 *     responses:
 *       200:
 *         description: Produto encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID do produto
 *                 nome:
 *                   type: string
 *                   description: Nome do produto
 *                 preco:
 *                   type: number
 *                   format: float
 *                   description: Preço do produto
 *                 descricao:
 *                   type: string
 *                   description: Descrição do produto
 *       404:
 *         description: Produto não encontrado
 *       401:
 *         description: Token JWT ausente ou inválido
 */
produtoRoute.get('/:id', getOneProdutos.handle);


/**
 * @swagger
 * /produtos/:
 *   put:
 *     tags:
 *       - Produtos
 *     summary: Atualizar um produto
 *     description: Atualiza as informações de um produto existente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - nome
 *               - preco
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID do produto a ser atualizado
 *                 example: "123e4567-e89b-12d3-a456-426614174000"
 *               nome:
 *                 type: string
 *                 description: Novo nome do produto
 *                 example: "Produto Atualizado"
 *               preco:
 *                 type: number
 *                 format: float
 *                 description: Novo preço do produto
 *                 example: 99.99
 *               descricao:
 *                 type: string
 *                 description: Nova descrição do produto (opcional)
 *                 example: "Descrição atualizada do produto"
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       400:
 *         description: Falha ao atualizar o produto
 *       401:
 *         description: Token JWT ausente ou inválido
 */
produtoRoute.put('/', updateProdutos.handle);


/**
 * @swagger
 * /produtos/:
 *   post:
 *     tags:
 *       - Produtos
 *     summary: Criar um novo produto
 *     description: Adiciona um novo produto ao sistema
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - preco
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do produto
 *                 example: "Novo Produto"
 *               preco:
 *                 type: number
 *                 format: float
 *                 description: Preço do produto
 *                 example: 49.99
 *               descricao:
 *                 type: string
 *                 description: Descrição do produto (opcional)
 *                 example: "Descrição do novo produto"
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       400:
 *         description: Falha ao criar o produto
 *       401:
 *         description: Token JWT ausente ou inválido
 */
produtoRoute.post('/', createProdutos.handle);


/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     tags:
 *       - Produtos
 *     summary: Deletar um produto
 *     description: Remove um produto do sistema com base no ID fornecido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produto a ser deletado
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 *       404:
 *         description: Produto não encontrado
 *       401:
 *         description: Token JWT ausente ou inválido
 */
produtoRoute.delete('/:id', deleteProdutos.handle);

export { produtoRoute };
