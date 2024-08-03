import { prisma } from "../prisma/client";

export class GetAllUserUseCase {
    async execute() {

        console.log("Buscando todos os usuários...");
        
        return await prisma.usuario.findMany(
            {
                select: {
                    id: true,
                    nome: true,
                    email: true,
                    cpf: true,
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
    }
}