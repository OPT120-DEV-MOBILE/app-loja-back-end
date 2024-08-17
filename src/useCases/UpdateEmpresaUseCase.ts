import { UpdateEmpresa } from "../interface/EmpresasDTO";
import { prisma } from "../prisma/client";


export class UpdateEmpresaUseCase{
    async execute({ id, nome, tipoDocumento, numeroDocumento, cep, endereco, cidade, estado }: UpdateEmpresa): Promise<Object>{

        let empresa = await prisma.empresa.findFirst({
            where: {
                id
            }
        }) as any;


        if(!empresa){
            console.log("Empresa não encontrado!");
            throw new Error("Empresa não encontrado!");
        }


        empresa = await prisma.empresa.findFirst({
            where: {
                AND: {
                    numeroDocumento,
                    NOT:{
                        id
                    }
                }

            }
        }) as any;


        if(empresa){
            console.log("Documento já utilizado!");
            throw new Error("Documento já utilizado!");
        }

        
        empresa = await prisma.empresa.update({
            where: {
                id
            },
            data: {
                nome,
                tipoDocumento,
                numeroDocumento,
                cep,
                endereco,
                cidade,
                estado
            }
        });


        if(!empresa){
            console.log("Erro ao atualizar a empresa!");
            throw new Error("Erro ao atualizar a empresa!");
        }


        console.log("Empresa atualizada com sucesso!");

        return empresa;
    }
}