import { prisma } from "../prisma/client";
import { ProdutoCreateDTO } from "../interface/ProdutosDTO";

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
