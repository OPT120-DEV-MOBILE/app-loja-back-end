import { prisma } from "../prisma/client";

export class DeleteProdutosUseCase{
    async execute(id: number): Promise<Object>{

        const produto = await prisma.produto.delete({
            where: {id}
        })
        
        return produto;
    }
}
