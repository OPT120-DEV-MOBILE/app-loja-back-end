import { Request, Response } from "express";
import { RegisterVendaUseCase } from "../useCases/vendas/RegisterVendaUseCase";
import { DeleteVendaUseCase } from "../useCases/vendas/DeleteVendaUseCase";
import { UpdateVendasUseCase } from "../useCases/vendas/UpdateVendaUseCase";
import { GetOneVendaUseCase } from "../useCases/vendas/GetOneVendaUseCase";
import { GetAllVendaUseCase } from "../useCases/vendas/GetAllVendaUseCase";
import { GetVendasUserUseCase } from "../useCases/vendas/GetVendasUserUseCase";
import { relatorioVendasClienteUseCase, relatorioVendasFuncionarioUseCase, relatorioVendasUseCase } from "../useCases/relatorioVendas";
import { RelatorioVendasDTO } from "../interface/VendasDTO";

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
        
        const getAllVendasUseCase = new GetAllVendaUseCase();
        
        const { venda } = req.query;
        const vendas = await getAllVendasUseCase.execute({ venda }) as any;
        
        const result = {
            "status": "sucesso",
            "mensagem": vendas.length === 0 ? "Nenhuma venda encontrada" : "Vendas encontradas com sucesso!",
            "vendas": vendas
        }
        
        return res.status(201).json(result);
    }
}



export class GetVendaController {
    async handle(req: Request, res: Response) {
        
        const getVendaUseCase = new GetOneVendaUseCase();

        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ message: "ID não fornecido" });
        }

        const venda =  await getVendaUseCase.execute(Number(id)) as any;

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

export class RelatorioVendasFuncionario {
    async handle(req: Request, res: Response) {
        
        const relatorioVendasFuncionario = new relatorioVendasFuncionarioUseCase();

        const { cpf } = req.query;

        const venda =  await relatorioVendasFuncionario.execute({ cpf } as RelatorioVendasDTO) as any;

        venda.status = "sucesso"
        venda.mensagem = "Vendas listadas com sucesso!"

        return res.status(201).json(venda);
    }
}

export class RelatorioVendasCliente {
    async handle(req: Request, res: Response) {
        
        const relatorioVendasCliente = new relatorioVendasClienteUseCase();

        const { cpf } = req.query;

        const venda =  await relatorioVendasCliente.execute({ cpf } as RelatorioVendasDTO) as any;

        venda.status = "sucesso"
        venda.mensagem = "Vendas listadas com sucesso!"

        return res.status(201).json(venda);
    }
}

export class RelatorioVendas {
    async handle(req: Request, res: Response) {
        
        const relatorioVendas = new relatorioVendasUseCase();

        const venda =  await relatorioVendas.execute() as any;

        venda.status = "sucesso"
        venda.mensagem = "Vendas listadas com sucesso!"

        return res.status(201).json(venda);
    }
}
