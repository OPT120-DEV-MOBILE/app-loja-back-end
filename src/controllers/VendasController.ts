import { Request, Response } from "express";
import { RegisterVendaUseCase } from "../useCases/vendas/RegisterVendaUseCase";
import { DeleteVendaUseCase } from "../useCases/vendas/DeleteVendaUseCase";
import { UpdateVendasUseCase } from "../useCases/vendas/UpdateVendaUseCase";

const jwt = require('jsonwebtoken');




export class RegisterVendasController {
    async handle(req: Request, res: Response) {
        
        const registerVendaUseCase = new RegisterVendaUseCase();

        const { idUsuario, idCliente, precoTotal, parcelas, precoParcelado, codigoDesconto, produtos } = req.body;

        const result = await registerVendaUseCase.execute( { idUsuario, idCliente, precoTotal, parcelas, precoParcelado, codigoDesconto, produtos } ) as any;
        
        result.status = "sucesso"
        result.mensagem = "Usuário cadastrado com sucesso!"
        
        return res.status(201).json(result);
    }
}



export class UpdateVendaController {
    async handle(req: Request, res: Response) {
        
        const updateVendasUseCase = new UpdateVendasUseCase();

        const { id, precoTotal, parcelas, precoParcelado, codigoDesconto, produtos } = req.body;
        
        const venda = await updateVendasUseCase.execute( {id, precoTotal, parcelas, precoParcelado, codigoDesconto, produtos} ) as any;

                
        venda.status = "sucesso"
        venda.mensagem = "Venda atualizada com sucesso!"


        return res.status(201).json(venda);
    }
}



export class DeleteVendaController {
    async handle(req: Request, res: Response) {
        
        const deleteVendaUseCase = new DeleteVendaUseCase();

        const { id } = req.query;
        
        const result = await deleteVendaUseCase.execute({ id: Number(id) }) as any;
        
        result.status = "sucesso"
        result.mensagem = "Usuário cadastrado com sucesso!"
        
        return res.status(201).json(result);
    }
}



export class GetAllVendasController {
    async handle(req: Request, res: Response) {
        
        const getAllVendasUseCase = new GetAllVendasUseCase();
        
        const vendas = await getAllVendasUseCase.execute() as any;
        
        vendas.status = "sucesso"
        vendas.mensagem = "Vendas listadas com sucesso!"
        
        return res.status(201).json(vendas);
    }
}



export class GetVendaController {
    async handle(req: Request, res: Response) {
        
        const getVendaUseCase = new GetVendaUseCase();

        const { id } = req.body;

        const venda =  await getVendaUseCase.execute() as any;

        venda.status = "sucesso"
        venda.mensagem = "Venda lida com sucesso!"

        return res.status(201).json(venda);
    }
}



export class GetVendasUserController {
    async handle(req: Request, res: Response) {
        
        const getVendasUserUseCase = new GetVendasUserUseCase();

        const { cpf } = req.body;

        const venda =  await getVendasUserUseCase.execute( cpf ) as any;

        venda.status = "sucesso"
        venda.mensagem = "Vendas listadas com sucesso!"

        return res.status(201).json(venda);
    }
}