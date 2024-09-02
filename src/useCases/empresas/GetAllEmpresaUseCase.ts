import { SearchEmpresa } from "../../interface/EmpresasDTO";
import { prisma } from "../../prisma/client";

export class GetAllEmpresasUseCase {
    async execute({ empresa }: SearchEmpresa): Promise<Object> {

        if (!empresa || empresa === "undefined") {
            console.log("Buscando todas as empresas");
            const empresas = await prisma.empresa.findMany();
            return empresas;
        }

        const search = String(empresa);

        console.log("Buscando as empresas com nome ou número de documento: ", search);

        const empresas = await prisma.empresa.findMany({
            where: {
                OR: [
                    {
                        nome: {
                            contains: search
                        }
                    },
                    {
                        numeroDocumento: {
                            contains: search
                        }
                    }
                ]
            }
        });

        return empresas;
    }
}
