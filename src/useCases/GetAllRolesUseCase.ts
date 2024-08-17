import { prisma } from "../prisma/client";

export class GetAllRolesUseCase{
    async execute(): Promise<Object>{

        console.log("Buscando todos os cargos...");
        
        return await prisma.roles.findMany();
    }
}