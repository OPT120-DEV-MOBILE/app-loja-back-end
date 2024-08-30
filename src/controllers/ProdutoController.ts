import { Request, Response } from "express";
import { GetAllProdutosUseCase } from "../useCases/GetAllProdutoUseCase";
import { Produto } from "@prisma/client";
import { GetOneProdutosUseCase } from "../useCases/GetOneProdutoUseCase";
import { ProdutoCreateDTO, ProdutoUpdateDTO } from "../interface/ProdutosDTO";
import { CreateProdutosUseCase } from "../useCases/createProdutoUseCase";
import { UpdateProdutosUseCase } from "../useCases/updateProdutoUseCase";
import { DeleteProdutosUseCase } from "../useCases/deleteProdutoUseCase";


export class GetAllProdutosController{
    async handle(req: Request, res: Response){
        const getAllProdutos = new GetAllProdutosUseCase();

        const { produto } = req.query;

        const Produtos = await getAllProdutos.execute({ produto }) as Produto;

        const result = {
            "status": "sucesso",
            "mensagem": "Produtos encontrados com sucesso!",
            "Produtos": Produtos
        }

        return res.status(201).json(result);
    }
}

export class GetOneProdutosController{
    async handle(req: Request, res: Response){
        const getOneProdutos = new GetOneProdutosUseCase();

        let id = parseInt(req.params.id);

        const Produto = await getOneProdutos.execute(id) as Produto;

        const result = {
            "status": "sucesso",
            "mensagem": "Produto encontrado com sucesso!",
            "Produto": Produto
        };

        return res.status(201).json(result)
    }
}

export class CreateProdutosController{
    async handle(req: Request, res: Response){
        const createProdutos = new CreateProdutosUseCase();

        let produto: ProdutoCreateDTO = req.body;

        const Produto = await createProdutos.execute(produto) as Produto;

        const result = {
            "status": "sucesso",
            "mensagem": "Produto criado com sucesso!",
            "Produto": Produto
        };

        return res.status(201).json(result);
    }
}

export class UpdateProdutosController{
    async handle(req: Request, res: Response){
        const updateProdutos = new UpdateProdutosUseCase();

        let produto: ProdutoUpdateDTO = req.body;

        const Produto = await updateProdutos.execute(produto) as Produto;

        const result = {
            "status": "sucesso",
            "mensagem": "Produto Atualizado com sucesso!",
            "Produto": Produto
        };

        return res.status(201).json(result);
    }
}

export class DeleteProdutosController{
    async handle(req: Request, res: Response){
        const deleteProdutos = new DeleteProdutosUseCase();

        let id = parseInt(req.params.id);

        await deleteProdutos.execute(id);

        const result = {
            "status": "sucesso",
            "mensagem": "Produto Deletado com sucesso!",
        };

        return res.status(201).json(result);
    }
}