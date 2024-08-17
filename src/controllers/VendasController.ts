import { Request, Response } from "express";
import { LoginUserUseCase } from "../useCases/LoginUserUseCase";
import bcrypt from 'bcrypt';
import { RegisterUserUseCase } from "../useCases/RegisterUserUseCase";
import { UpdateUserUseCase } from "../useCases/UpdateUserUseCase";
import { GetAllUserUseCase } from "../useCases/GetAllUserUseCase";
import { GetUserUseCase } from "../useCases/GetUserUseCase";
import { RegisterVendaUseCase } from "../useCases/vendas/RegisterVendaUseCase";
import { DeleteVendaUseCase } from "../useCases/vendas/DeleteVendaUseCase";

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
        
        const loginUserUseCase = new LoginUserUseCase();

        const { email, senha } = req.body;
        
        const result = await loginUserUseCase.execute( {email, senha} ) as any;

        // Gera o token JWT
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: '10h'
        });

        
        result.status = "sucesso"
        result.mensagem = "Login efetuado com sucesso!"
        result.JWT = token;


        return res.status(201).json(result);
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
        
        const updateUserUseCase = new UpdateUserUseCase();

        const { id, nome, email, cpf, roles, idEmpresa } = req.body;

        let { senha } = req.body;

        if(senha && senha !== '')
            senha = await bcrypt.hash(senha, 8);
        
        const result = await updateUserUseCase.execute( { id, nome, email, senha, cpf, roles, idEmpresa } ) as any;
        
        result.status = "sucesso"
        result.mensagem = "Usuário atualizado com sucesso!"
        
        return res.status(201).json(result);
    }
}



export class GetVendaController {
    async handle(req: Request, res: Response) {
        
        const getAllUserUseCase = new GetAllUserUseCase();

        const usuarios =  await getAllUserUseCase.execute() as any;

        const result = {
            "status": "sucesso",
            "mensagem": "Usuários encontrados com sucesso!",
            "usuarios": usuarios
        }

        return res.status(201).json(result);
    }
}



export class GetVendaUserController {
    async handle(req: Request, res: Response) {
        
        const getUserUseCase = new GetUserUseCase();

        const { cpf } = req.body;

        const usuario =  await getUserUseCase.execute(cpf) as any;

        const result = {
            "status": "sucesso",
            "mensagem": "Usuário encontrado com sucesso!",
            "usuarios": usuario
        }

        return res.status(201).json(result);
    }
}