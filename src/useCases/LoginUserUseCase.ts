import { AppError } from "../errors/AppErrors";
import { UserLoginDTO } from "../interface/UsuariosDTO";
import { prisma } from "../prisma/client";

export class LoginUserUseCase{
    async execute({ email, senha }: UserLoginDTO): Promise<Object>{
        
        const users = await prisma.usuario.findUnique({
            where: {
                email
            },
            select: {
                nome: true,
                senha: true,
            }
        });


        if(!users){
            console.log('Email errado');
            throw new AppError('Email Errado');
        }

        if(users.senha != senha){
            console.log('Senha errada');
            throw new AppError('Senha Errada');
        }

        console.log("Login realizado com sucesso!");


        return {};
    }
}