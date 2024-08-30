
export interface UserLoginDTO {
    email: string,
    senha: string,
}


export interface SearchUserDTO {
    nome: string
}


export interface UserRegisterDTO {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    roles: number;
    idEmpresa: number;
}


export interface UpdateRegisterDTO {
    id: number;
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    roles: number;
    idEmpresa: number;
}