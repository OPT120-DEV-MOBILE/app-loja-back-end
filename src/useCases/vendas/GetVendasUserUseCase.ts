import { prisma } from "../../prisma/client";

export class GetVendasUserUseCase{
    async execute(cpf: string): Promise<Object>{
        
        let vendas = await prisma.venda.findMany({
            where: {
                Cliente: {
                    cpf: cpf
                }
            }
        }) as any;
        if(!vendas)
            throw new Error("Erro ao deletar a venda!");

        
        return vendas;
    }
}