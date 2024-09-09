import { prisma } from "../prisma/client";
import { RelatorioVendasDTO } from "../interface/VendasDTO";

export class relatorioVendasFuncionarioUseCase{
    async execute({cpf, dataInicio, dataFim}: RelatorioVendasDTO): Promise<Object>{

        let condition = {};
        
        const funcionario = await prisma.usuario.findUnique({
            where: {
                cpf
            }
        });

        let idFuncionario = funcionario?.id;

        if(dataInicio && dataFim){
            condition = {
                idUsuario: idFuncionario,
                dataVenda: {
                    gte: new Date(dataInicio),
                    lte: new Date(dataFim)
                }
            }
        } else {
            condition = {
                idUsuario: idFuncionario
            }
        }


        const vendas = await prisma.venda.findMany({
            where: condition,
          });

        const report = await prisma.venda.aggregate({
            where: condition,
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
    async execute({cpf, dataInicio, dataFim}: RelatorioVendasDTO): Promise<Object>{

        const cliente = await prisma.usuario.findUnique({
            where: {
                cpf
            }
        })

        let idCliente = cliente?.id;

        let condition = {};

        if(dataInicio && dataFim){
            condition = {
                idCliente: idCliente,
                dataVenda: {
                    gte: new Date(dataInicio),
                    lte: new Date(dataFim)
                }
            }
        } else {
            condition = {
                idCliente: idCliente
            }
        }


        const vendas = await prisma.venda.findMany({
            where: condition,
          });

        const report = await prisma.venda.aggregate({
            where: condition,
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