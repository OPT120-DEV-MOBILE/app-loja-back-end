import { Request, Response } from "express";
import { LoginUserUseCase } from "../useCases/LoginUserUseCase";
import bcrypt from 'bcrypt';
import { RegisterUserUseCase } from "../useCases/RegisterUserUseCase";
import { UpdateUserUseCase } from "../useCases/UpdateUserUseCase";
import { GetAllUserUseCase } from "../useCases/GetAllUserUseCase";
import { GetUserUseCase } from "../useCases/GetUserUseCase";

const jwt = require('jsonwebtoken');




export class JWTTesteController {
    async handle(req: Request, res: Response) {
        
        const result: { status: string; mensagem: string; } = {
            status: "sucesso",
            mensagem: "JWT válido, acesso permitido"
        };

        return res.status(201).json(result);
    }
}



export class LoginUserController {
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



export class RegisterUserController {
    async handle(req: Request, res: Response) {
        
        const registerUserUseCase = new RegisterUserUseCase();

        const { nome, email, cpf, roles, idEmpresa } = req.body;

        let { senha } = req.body;

        senha = await bcrypt.hash(senha, 8);
        
        const result = await registerUserUseCase.execute( { nome, email, senha, cpf, roles, idEmpresa } ) as any;
        
        result.status = "sucesso"
        result.mensagem = "Usuário cadastrado com sucesso!"
        
        return res.status(201).json(result);
    }
}



export class UpdateUserController {
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



export class GetAllUserController {
    async handle(req: Request, res: Response) {
        
        const getAllUserUseCase = new GetAllUserUseCase();

        const { nome } = req.query;
        const usuarios =  await getAllUserUseCase.execute({ nome: String(nome) }) as any;

        const result = {
            "status": "sucesso",
            "mensagem": usuarios.length === 0 ? "Nenhum usuários encontrado!" : "Usuário encontrados com sucesso!",
            "usuarios": usuarios
        }

        return res.status(201).json(result);
    }
}



export class GetUserController {
    async handle(req: Request, res: Response) {
        
        const getUserUseCase = new GetUserUseCase();

        const { cpf } = req.query;

        const usuario =  await getUserUseCase.execute(cpf?.toString() ?? '') as any;

        const result = {
            "status": "sucesso",
            "mensagem": "Usuário encontrado com sucesso!",
            "usuarios": usuario
        }

        return res.status(201).json(result);
    }
}