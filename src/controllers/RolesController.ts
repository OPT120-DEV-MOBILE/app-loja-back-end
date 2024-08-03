import { Request, Response } from "express";
import { GetAllRolesUseCase } from "../useCases/GetAllRolesUseCase";


export class GetAllRolesController{
    async handle(req: Request, response: Response){
        const getAllRoles = new GetAllRolesUseCase();
        return response.json(await getAllRoles.execute());
    }
}