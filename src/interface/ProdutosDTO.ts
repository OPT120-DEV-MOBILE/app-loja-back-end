
export interface ProdutoCreateDTO {
    nome: string;
    preco: number;
    descricao: string;
    quantidade: number;
    dataDeFabricacao?: Date;
    dataDeValidade?: Date;
}



export interface ProdutoUpdateDTO extends ProdutoCreateDTO{
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    quantidade: number;
    dataDeFabricacao?: Date;
    dataDeValidade?: Date;
}



export interface SearchProdutoDTO{
    produto: any;
}
