import { UpdateRegisterDTO } from "../interface/UpdateRegisterDTO";
import { prisma } from "../prisma/client";

export class UpdateUserUseCase{
    async execute({ id, nome, email, senha, cpf, roles, idEmpresa }: UpdateRegisterDTO): Promise<Object>{

        let user = await prisma.usuario.findUnique({
            where: {
                id
            }
        }) as any;


        if(!user){
            console.log("Usuário não encontrado!");
            throw new Error("Usuário não encontrado!");
        }

        
        const users = await prisma.usuario.findFirst({
            where: {
                email,
                id: {
                    not: id
                }
            }
        });


        if(users){
            console.log(users);
            console.log("Email já utilizado!");
            throw new Error("Email já utilizado!");
        }
        


        user = await prisma.usuario.update({
            where: {
                id
            },
            data: {
                nome,
                email,
                senha: senha || user.senha,
                cpf,
                roles,
                idEmpresa
            }
        });


        if(!user){
            console.log("Erro ao atualizar o usuário!");
            throw new Error("Erro ao atualizar o usuário!");
        }
        
        delete user.senha;


        console.log("Usuário atualizado com sucesso!");


        return user;
    }
}