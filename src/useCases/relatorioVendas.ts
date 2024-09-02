import { prisma } from "../prisma/client";
import { RelatorioVendasDTO } from "../interface/VendasDTO";

export class relatorioVendasFuncionarioUseCase{
    async execute({cpf}: RelatorioVendasDTO): Promise<Object>{

        const funcionario = await prisma.usuario.findUnique({
            where: {
                cpf
            }
        })

        let idFuncionario = funcionario?.id;

        const vendas = await prisma.venda.findMany({
            where: {
              idUsuario: idFuncionario, 
            },
          });

        const report = await prisma.venda.aggregate({
            where: {
                idUsuario: idFuncionario
            },
            _count: {
                _all: true
            },
            _sum: {
                precoTotal: true
            }
        });

        return {
            vendas: vendas,
            totalVendas:report._count._all,
            valorTotalVendas: report._sum.precoTotal
        }
    }
}

export class relatorioVendasClienteUseCase{
    async execute({cpf}: RelatorioVendasDTO): Promise<Object>{

        const cliente = await prisma.usuario.findUnique({
            where: {
                cpf
            }
        })

        let idCliente = cliente?.id;


        const vendas = await prisma.venda.findMany({
            where: {
              idCliente: idCliente
            },
          });

        const report = await prisma.venda.aggregate({
            where: {
                idCliente: idCliente
            },
            _count: {
                _all: true
            },
            _sum: {
                precoTotal: true
            }
        });

        return {
            vendas: vendas,
            totalVendas:report._count._all,
            valorTotalVendas: report._sum.precoTotal
        }
    }
}

export class relatorioVendasUseCase{
    async execute(): Promise<Object>{
        const vendas = await prisma.venda.findMany();

        const report = await prisma.venda.aggregate({
            _count: {
                _all: true
            },
            _sum: {
                precoTotal: true
            }
        });

        return {
            vendas: vendas,
            totalVendas:report._count._all,
            valorTotalVendas: report._sum.precoTotal
        }
    }
}