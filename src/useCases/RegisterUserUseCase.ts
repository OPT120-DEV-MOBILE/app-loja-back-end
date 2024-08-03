import { UserRegisterDTO } from "../interface/UserRegisterDTO";
import { prisma } from "../prisma/client";

export class RegisterUserUseCase{
    async execute({ email, senha }: UserRegisterDTO): Promise<Object>{
        
        const users = await prisma.users.create({
            data: {
                email,
                senha
            }
        });

        console.log("Register realizado com sucesso!");

        return users;
    }
}