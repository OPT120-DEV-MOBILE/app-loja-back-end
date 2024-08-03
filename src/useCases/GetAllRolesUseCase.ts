import { prisma } from "../prisma/client";

export class GetAllRolesUseCase{
    async execute(): Promise<Object>{
        
        return await prisma.roles.findMany();
    }
}