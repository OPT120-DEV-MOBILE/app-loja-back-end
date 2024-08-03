import { prisma } from "../prisma/client";

export class GetAllEmpresasUseCase{
    async execute(): Promise<Object>{

        const empresas = await prisma.empresa.findMany();
        
        return empresas;
    }
}