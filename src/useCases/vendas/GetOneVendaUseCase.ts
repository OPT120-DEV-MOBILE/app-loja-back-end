import { prisma } from "../../prisma/client";

export class GetAllVendaUseCase{
    async execute(): Promise<Object>{
        
        let vendas = await prisma.venda.findMany() as any;
        if(!vendas)
            throw new Error("Erro ao deletar a venda!");

        
        return vendas;
    }
}