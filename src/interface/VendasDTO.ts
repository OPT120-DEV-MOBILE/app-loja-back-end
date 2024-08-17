
// Interface para Rotas de Empresas


// Interface para criar uma nova venda
export interface NovaVendaDTO{
    idUsuario:       number;
    idCliente:       number;
    precoTotal:      number;
    parcelas:        number;
    precoParcelado:  number;
    codigoDesconto:  string;
    produtos: produtoDTO[];
}

// Interface para criar uma nova venda
export interface produtoDTO{
    idProduto: number;
    quantidade: number;
    preco: number;
}



// Interface para atualizar uma empresa
export interface UpdateVenda{
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
export interface DeleteVendaDTO{
    id: number;
}