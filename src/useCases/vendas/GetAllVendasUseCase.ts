import { prisma } from "../../prisma/client";

export class GetAllVendasUseCase {
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

    const vendasSemIds = vendas.map(venda => {
      const { idUsuario, idCliente, ...rest } = venda;
      return {
        ...rest,
        Funcionario: venda.Funcionario,
        Cliente: venda.Cliente,
      };
    });

    return vendasSemIds;
  }
}
