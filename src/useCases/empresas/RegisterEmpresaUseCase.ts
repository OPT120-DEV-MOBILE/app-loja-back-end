import { NovaEmpresa } from "../../interface/EmpresasDTO";
import { prisma } from "../../prisma/client";



export class RegisterEmpresaUseCase{
    async execute({ nome, tipoDocumento, numeroDocumento, cep, endereco, cidade, estado }: NovaEmpresa): Promise<Object>{

        let empresa = await prisma.empresa.findFirst({
            where: {
                numeroDocumento: numeroDocumento
            }
        });

        if(empresa){
            throw new Error("Empresa já cadastrada!");
        }

        empresa = await prisma.empresa.create({
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
            console.log("Erro ao cadastrar empresa!");
            throw new Error("Erro ao cadastrar empresa!");
        }
        

        return empresa;
    }
}