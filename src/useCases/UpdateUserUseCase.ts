import { UpdateRegisterDTO } from "../interface/UsuariosDTO";
import { prisma } from "../prisma/client";
import bcrypt from 'bcrypt';


export class UpdateUserUseCase{
    async execute({ id, nome, email, senhaNova, senhaAntiga, cpf, roles, idEmpresa }: UpdateRegisterDTO): Promise<Object>{

        let user = await prisma.usuario.findUnique({
            where: {
                id
            }
        }) as any;


        if(!user){
            console.log("Usuário não encontrado!");
            throw new Error("Usuário não encontrado!");
        }


        if(senhaAntiga != null && senhaAntiga != '' && !await bcrypt.compare(senhaAntiga, user.senha)){
            console.log("Senha incorreta");
            throw new Error("Senha incorreta");
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
        

        let senha

        if(senhaNova && senhaNova !== '' && senhaAntiga && senhaAntiga !== '')
            senha = senhaNova
        else
            senha = user.senha


        user = await prisma.usuario.update({
            where: {
                id
            },
            data: {
                nome,
                email,
                senha: senha,
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