
// Interface para Rotas de Empresas


// Interface para criar uma nova empresa
export interface NovaEmpresa{
    nome: string;
    tipoDocumento: string;
    numeroDocumento: string;
    cep: string;
    endereco: string;
    cidade: string;
    estado: string;
}


// Interface para atualizar uma empresa
export interface UpdateEmpresa{
    id: number;
    nome: string;
    tipoDocumento: string;
    numeroDocumento: string;
    cep: string;
    endereco: string;
    cidade: string;
    estado: string;
}


// Interface para deletar uma empresa
export interface DeleteEmpresa{
    id: number;
    numeroDocumento: string;
}