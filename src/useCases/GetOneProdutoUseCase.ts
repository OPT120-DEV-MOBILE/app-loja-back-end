import { prisma } from "../prisma/client";

export class GetOneProdutosUseCase{
    async execute(id: number): Promise<Object>{

        const empresas = await prisma.produto.findFirstOrThrow({
            where:{
                id
            }
        });
        
        return empresas;
    }
}