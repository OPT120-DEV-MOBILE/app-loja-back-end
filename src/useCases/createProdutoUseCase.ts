import { Produto } from "@prisma/client";
import { ProdutoCreateDTO } from "../interface/ProdutoCreateDTO";
import { prisma } from "../prisma/client";

export class CreateProdutosUseCase{
    async execute({nome, preco, descricao, quantidade, dataDeFabricacao, dataDeValidade}: ProdutoCreateDTO): Promise<Object>{

        const produto = await prisma.produto.create({
            data: {
                nome,
                preco,
                descricao,
                quantidade,
                dataDeFabricacao,
                dataDeValidade
            }
        })
        
        return produto;
    }
}
