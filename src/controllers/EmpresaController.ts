import { Request, Response } from "express";
import { GetAllEmpresasUseCase } from "../useCases/GetAllEmpresaUseCase";
import { RegisterEmpresaUseCase } from "../useCases/registerEmpresaUseCase";
import { UpdateEmpresaUseCase } from "../useCases/UpdateEmpresaUseCase";
import { DeleteEmpresaUseCase } from "../useCases/DeleteEmpresaUseCase";




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



export class RegisterEmpresaController{
    async handle(req: Request, res: Response){

        const registerEmpresasUseCase = new RegisterEmpresaUseCase();

        const { nome, tipoDocumento, numeroDocumento, cep, endereco, cidade, estado } = req.body;
        const empresa = await registerEmpresasUseCase.execute({ nome, tipoDocumento, numeroDocumento, cep, endereco, cidade, estado }) as any;


        const result = {
            "status": "sucesso",
            "mensagem": "Empresa cadastrada com sucesso!",
            "empresa": empresa
        }

        return res.status(201).json(result);
    }
}



export class UpdateEmpresaController{
    async handle(req: Request, res: Response){

        const updateEmpresasUseCase = new UpdateEmpresaUseCase();

        const { id, nome, tipoDocumento, numeroDocumento, cep, endereco, cidade, estado } = req.body;
        const empresa = await updateEmpresasUseCase.execute({ id, nome, tipoDocumento, numeroDocumento, cep, endereco, cidade, estado }) as any;


        const result = {
            "status": "sucesso",
            "mensagem": "Empresa atualizada com sucesso!",
            "empresa": empresa
        }

        return res.status(201).json(result);
    }
}



export class DeleteEmpresaController{
    async handle(req: Request, res: Response){

        const deleteEmpresasUseCase = new DeleteEmpresaUseCase();

        const { id, numeroDocumento } = req.body;
        const empresa = await deleteEmpresasUseCase.execute({ id, numeroDocumento }) as any;


        const result = {
            "status": "sucesso",
            "mensagem": "Empresa Deletada com sucesso!",
            "empresa": empresa
        }

        return res.status(201).json(result);
    }
}