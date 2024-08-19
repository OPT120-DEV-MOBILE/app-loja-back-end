import { prisma } from "../../prisma/client";

export class GetOneVendaUseCase {
  async execute(id: number): Promise<Object> {
    const venda = await prisma.venda.findUnique({
      where: {
        id: id,
      },
      include: {
        ProdutoVenda: {
            include: {
                Produto: true,
            },
        },
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
            cpf: true,
          }
        }
      },
    }) as any;

    if (!venda) {
        throw new Error("Erro ao buscar a venda!");
    }

    return {
        venda
    };
  }
}
