import { prisma } from "../prisma/client";

export class GetAllUserUseCase {
    async execute() {
        return await prisma.usuario.findMany();
    }
}