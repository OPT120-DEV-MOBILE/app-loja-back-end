import { DeleteEmpresa } from "../interface/EmpresasDTO";
import { prisma } from "../prisma/client";



export class DeleteEmpresaUseCase{
    async execute({ id, numeroDocumento }: DeleteEmpresa): Promise<Object>{

        let empresa = await prisma.empresa.findFirst({
            where: {
                AND: [
                    {
                        id,
                        numeroDocumento
                    }
                ]
            }
        }) as any;


        if(!empresa){
            throw new Error("Empresa não encontrado!");
        }

        
        empresa = await prisma.empresa.delete({
            where: {
                id,
                numeroDocumento
            },
        });

        if(!empresa){
            throw new Error("Erro ao deletar a empresa!");
        }


        console.log("Empresa deletada com sucesso!");


        return empresa;
    }
}