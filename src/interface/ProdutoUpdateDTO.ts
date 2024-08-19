import { ProdutoCreateDTO } from "./ProdutoCreateDTO";

export interface ProdutoUpdateDTO extends ProdutoCreateDTO{
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    quantidade: number;
    dataDeFabricacao?: Date;
    dataDeValidade?: Date;
}