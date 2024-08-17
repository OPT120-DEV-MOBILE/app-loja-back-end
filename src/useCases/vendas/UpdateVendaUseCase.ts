import { UpdateVendaDTO } from "../../interface/VendasDTO";
import { prisma } from "../../prisma/client";

export class UpdateVendasUseCase{
    async execute({ id, precoTotal, parcelas, precoParcelado, codigoDesconto, produtos }: UpdateVendaDTO): Promise<Object>{

        let venda = await prisma.venda.findUnique({
            where: {
                id
            }
        }) as any;


        if(!venda){
            throw new Error("Venda não encontrada!");
        }

        
        venda = await prisma.venda.update({
            where: {
                id
            },
            data: {
                precoTotal,
                parcelas,
                precoParcelado,
                codigoDesconto,
                ProdutoVenda: {
                    update: produtos.map(produto => ({
                        where: { id: produto.idProduto },
                        data: {
                            quantidade: produto.quantidade,
                            precoProduto: produto.preco
                        }
                    }))
                }
            }
        }) as any;


        if(!venda){
            throw new Error("Erro ao atualizar a venda!");
        }
        


        console.log("Venda atualizado com sucesso!");


        return venda;
    }
}