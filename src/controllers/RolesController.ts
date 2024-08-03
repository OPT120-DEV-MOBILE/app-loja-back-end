import { Request, Response } from "express";
import { GetAllRolesUseCase } from "../useCases/GetAllRolesUseCase";


export class GetAllRolesController{
    async handle(req: Request, res: Response){
        const getAllRoles = new GetAllRolesUseCase();

        const roles = await getAllRoles.execute() as any;

        const result = {
            "status": "sucesso",
            "mensagem": "Cargos encontrados com sucesso!",
            "roles": roles
        }

        return res.status(201).json(result);
    }
}