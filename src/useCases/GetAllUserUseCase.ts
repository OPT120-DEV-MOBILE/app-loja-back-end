import { SearchUserDTO } from "../interface/UsuariosDTO";
import { prisma } from "../prisma/client";

export class GetAllUserUseCase {
    async execute({ nome }: SearchUserDTO): Promise<Object>{
        
        const id = Number(nome);

        if(id){
            
            console.log("Buscando os usuários com id: ", id);
            
            const usuarios = await prisma.usuario.findMany({
                where: {
                    id
                }, select: {
                    id: true,
                    nome: true,
                    email: true,
                    cpf: true,
                    quantidadeDeCompras: true,
                    role: true,
                    empresa: {
                        select: {
                            id: true,
                            nome: true
                        }
                    }
                }
            });
            
            if(usuarios.length !== 0)
                return usuarios;
        }
         
        

        console.log("Buscando os usuários com nome: ", nome);
        
        const usuarios = await prisma.usuario.findMany({
            where: {
                nome: {
                    contains: nome
                }
            }, select: {
                id: true,
                nome: true,
                email: true,
                cpf: true,
                quantidadeDeCompras: true,
                role: true,
                empresa: {
                    select: {
                        id: true,
                        nome: true
                    }
                }
            }
        });


        return usuarios;
        
    }
}