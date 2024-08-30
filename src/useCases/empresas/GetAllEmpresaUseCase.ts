import { SearchEmpresa } from "../../interface/EmpresasDTO";
import { prisma } from "../../prisma/client";


export class GetAllEmpresasUseCase{
    async execute({ empresa }: SearchEmpresa): Promise<Object>{

        console.log('\n\nProcurando empresas com documento: ', empresa);

        let empresas = await prisma.empresa.findMany({
            where: {
                numeroDocumento: {
                    contains: empresa
                }
            }
        });

        if(empresas.length !== 0)
            return empresas;

        


        console.log('\n\nProcurando empresas com nome: ', empresa);

        empresas = await prisma.empresa.findMany({
            where: {
                nome: {
                    contains: empresa
                }
            }
        });

       
        return empresas;
    }
}