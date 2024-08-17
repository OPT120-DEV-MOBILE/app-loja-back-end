import { NovaVendaDTO } from "../../interface/VendasDTO";
import { prisma } from "../../prisma/client";

export class RegisterVendaUseCase{
    async execute({ idUsuario, idCliente, precoTotal, parcelas, precoParcelado, codigoDesconto, produtos }: NovaVendaDTO): Promise<Object>{
        
        let venda = await prisma.venda.create({
            data: {
                idUsuario,
                idCliente,
                precoTotal,
                parcelas,
                precoParcelado,
                codigoDesconto,
                ProdutoVenda: {
                    create: produtos.map(produto => ({
                        idProduto: produto.idProduto,
                        quantidade: produto.quantidade,
                        precoProduto: produto.preco
                    }))
                }
            }
        }) as any;

        if(!venda)
            throw new Error("Erro ao realizar a venda!");


        venda = await prisma.venda.findUnique({
            where: {
                id: venda.id
            },
            include: {
                ProdutoVenda: {
                    select: {
                        idProduto: true,
                        quantidade: true,
                        precoProduto: true,
                        Produto: {
                            select: {
                                nome: true,
                                preco: true
                            }
                        }
                    }
                }
            }
        });
        

        
        console.log("Venda cadastrada com sucesso!");

        return venda;
    }
}