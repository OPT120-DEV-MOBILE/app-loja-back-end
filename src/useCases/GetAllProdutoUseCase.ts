import { SearchProdutoDTO } from "../interface/ProdutosDTO";
import { prisma } from "../prisma/client";

export class GetAllProdutosUseCase{
    async execute({ produto }: SearchProdutoDTO): Promise<Object>{

        const id = Number(produto);

        if(id){
            
            console.log("Buscando os usuários com id: ", id);

            const empresas = await prisma.produto.findMany({
                where: {
                    id
                }
            });
            
            if(empresas.length !== 0)
                return empresas;
        }


        
        const nome = String(produto);

        console.log("Buscando os usuários com nome: ", nome);
        const empresas = await prisma.produto.findMany({
            where: {
                nome: {
                    contains: nome
                }
            }
        });

        
        return empresas;
    }
}