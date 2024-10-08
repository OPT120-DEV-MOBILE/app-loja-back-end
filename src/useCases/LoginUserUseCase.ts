import { AppError } from "../errors/AppErrors";
import { UserLoginDTO } from "../interface/UsuariosDTO";
import { prisma } from "../prisma/client";
import bcrypt from 'bcrypt';

export class LoginUserUseCase{
    async execute({ email, senha }: UserLoginDTO): Promise<Object>{
        
        const users = await prisma.usuario.findUnique({
            where: {
                email
            },
            select: {
                id: true,
                nome: true,
                senha: true,
                roles: true
            }
        }) as any;


        if(!users){
            console.log('Email errado');
            throw new AppError('Email Errado');
        }

        if(!await bcrypt.compare(senha, users.senha)){
            console.log('Senha errada');
            throw new AppError('Senha Errada');
        }

        delete users.senha;

        console.log("Login realizado com sucesso!");


        return users;
    }
}