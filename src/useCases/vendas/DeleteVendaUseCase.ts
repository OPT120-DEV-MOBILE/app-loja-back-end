import { DeleteVendaDTO } from "../../interface/VendasDTO";
import { prisma } from "../../prisma/client";

export class DeleteVendaUseCase{
    async execute({ id }: DeleteVendaDTO): Promise<Object>{
        
        let venda = await prisma.venda.delete({
            where: {
                id
            }
        }) as any;

        if(!venda)
            throw new Error("Erro ao deletar a venda!");

        
        console.log("Venda deletada com sucesso!");

        return venda;
    }
}