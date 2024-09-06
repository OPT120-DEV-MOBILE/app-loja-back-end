import { SearchProdutoDTO } from "../interface/ProdutosDTO";
import { prisma } from "../prisma/client";

export class GetAllProdutosUseCase {
    async execute({ produto }: SearchProdutoDTO): Promise<Object> {

        if (!produto || produto === "undefined") {
            console.log("Buscando todos os produtos");
            const produtos = await prisma.produto.findMany();
            return produtos;
        }

        const id = Number(produto);

        if (!isNaN(id)) {
            console.log("Buscando os produtos com id: ", id);

            const produtos = await prisma.produto.findMany({
                where: {
                    id
                }
            });

            if (produtos.length !== 0) return produtos;
        }

        const search = String(produto);

        console.log("Buscando os produtos com nome: ", search);

        const produtos = await prisma.produto.findMany({
            where: {
                nome: {
                    contains: search,
                }
            }
        });

        return produtos;
    }
}
