import { Request, Response } from "express";
import { GetAllEmpresasUseCase } from "../useCases/GetAllEmpresaUseCase";


export class GetAllEmpresasController{
    async handle(req: Request, response: Response){
        const getAllEmpresas = new GetAllEmpresasUseCase();
        return response.json(await getAllEmpresas.execute());
    }
}