import { UpdateVendaDTO } from "../../interface/VendasDTO";
import { prisma } from "../../prisma/client";

export class UpdateVendasUseCase {
    async execute({ id, precoTotal, parcelas, precoParcelado, codigoDesconto, produtos }: UpdateVendaDTO): Promise<Object> {
        let venda = await prisma.venda.findUnique({
            where: {
                id
            }
        }) as any;

        if (!venda) {
            throw new Error("Venda não encontrada!");
        }

        venda = await prisma.$transaction(async (prisma) => {
            await prisma.produtoVenda.deleteMany({
                where: {
                    idVenda: id
                }
            });

            const updatedVenda = await prisma.venda.update({
                where: {
                    id
                },
                data: {
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
            });

            return updatedVenda;
        });

        if (!venda) {
            throw new Error("Erro ao atualizar a venda!");
        }

        console.log("Venda atualizada com sucesso!");

        return venda;
    }
}
