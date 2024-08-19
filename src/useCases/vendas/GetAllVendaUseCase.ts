import { prisma } from "../../prisma/client";

export class GetAllVendaUseCase{
    async execute(): Promise<Object> {
        const vendas = await prisma.venda.findMany({
          include: {
            Funcionario: {
              select: {
                id: true,
                nome: true,
                email: true,
              }
            },
            Cliente: {
              select: {
                id: true,
                nome: true,
                email: true,
              }
            }
          }
        });
    
        return vendas;
    }
}