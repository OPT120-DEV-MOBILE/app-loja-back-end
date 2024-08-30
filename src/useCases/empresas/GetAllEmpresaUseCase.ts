import { SearchEmpresa } from "../../interface/EmpresasDTO";
import { prisma } from "../../prisma/client";


export class GetAllEmpresasUseCase{
    async execute({ nome }: SearchEmpresa): Promise<Object>{

        console.log('\n\nProcurando empresas com nome: ', nome);

        const empresas = await prisma.empresa.findMany({
            where: {
                nome: {
                    contains: nome
                }
            }
        });


        console.log('\nEmpresas encontradas que possuem \'' + nome + '\' no nome: ', empresas.length);
       
        return empresas;
    }
}