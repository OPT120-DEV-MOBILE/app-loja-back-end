import { prisma } from "../prisma/client";
import { ProdutoUpdateDTO } from "../interface/ProdutosDTO";

export class UpdateProdutosUseCase{
    async execute({id, nome, preco, descricao, quantidade, dataDeFabricacao, dataDeValidade}: ProdutoUpdateDTO): Promise<Object>{

        const produto = await prisma.produto.update({
            where: {id},
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
