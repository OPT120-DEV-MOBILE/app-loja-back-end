import { Request, Response } from "express";
import { LoginUserUseCase } from "../useCases/LoginUserUseCase";
import bcrypt from 'bcrypt';
import { RegisterUserUseCase } from "../useCases/RegisterUserUseCase";

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

        const { email } = req.body;

        let { senha } = req.body;

        senha = await bcrypt.hash(senha, 8);
        
        const result = await registerUserUseCase.execute( {email, senha} ) as any;

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