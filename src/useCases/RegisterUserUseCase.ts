import { UserRegisterDTO } from "../interface/UserRegisterDTO";
import { prisma } from "../prisma/client";

export class RegisterUserUseCase{
    async execute({ nome, email, senha, cpf, roles, idEmpresa }: UserRegisterDTO): Promise<Object>{
        
        const users = await prisma.usuario.create({
            data: {
                nome,
                email,
                senha,
                cpf,
                roles,
                idEmpresa,
            }
        });

        console.log("Register realizado com sucesso!");

        return users;
    }
}