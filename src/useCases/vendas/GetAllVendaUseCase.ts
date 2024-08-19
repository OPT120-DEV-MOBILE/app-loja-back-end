import { DeleteVendaDTO } from "../../interface/VendasDTO";
import { prisma } from "../../prisma/client";

export class GetOneVendaUseCase{
    async execute(id: Number): Promise<Object>{
        
        let vendas = await prisma.venda.findUnique({
            where: {
                id: Number(id)
            }
        }) as any;
        if(!vendas)
            throw new Error("Erro ao deletar a venda!");

        
        return vendas;
    }
}