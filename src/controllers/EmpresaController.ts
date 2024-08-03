import { Request, Response } from "express";
import { GetAllEmpresasUseCase } from "../useCases/GetAllEmpresaUseCase";


export class GetAllEmpresasController{
    async handle(req: Request, res: Response){
        const getAllEmpresas = new GetAllEmpresasUseCase();

        const empresas = await getAllEmpresas.execute() as any;

        const result = {
            "status": "sucesso",
            "mensagem": "Empresas encontrados com sucesso!",
            "empresas": empresas
        }

        return res.status(201).json(result);
    }
}