import { prisma } from "../prisma/client";

export class GetAllEmpresasUseCase{
    async execute(): Promise<Object>{
        
        return await prisma.empresas.findMany();
    }
}