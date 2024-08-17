
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
export interface UpdateVendaDTO{
    id:             number;
    precoTotal:     number;
    parcelas:       number;
    precoParcelado: number;
    codigoDesconto: string;
    produtos: produtoDTO[];
}



// Interface para deletar uma empresa
export interface DeleteVendaDTO{
    id: number;
}