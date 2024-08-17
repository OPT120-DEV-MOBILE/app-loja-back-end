import { prisma } from "../prisma/client";

export class GetAllProdutosUseCase{
    async execute(): Promise<Object>{

        const empresas = await prisma.produto.findMany();
        
        return empresas;
    }
}