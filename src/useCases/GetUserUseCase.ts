import { prisma } from "../prisma/client";

export class GetUserUseCase {
    async execute(cpf: string) {

        console.log("Buscando o usuário dono do cpf: ", cpf);

        const user = await prisma.usuario.findUnique({
            where: {
                cpf
            },
                select: {
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
            }
        );


        if(!user) {
            throw new Error("Usuário não encontrado!");
        }



        return user;
    }
}