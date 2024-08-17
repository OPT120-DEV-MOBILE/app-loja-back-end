import { ProdutoVenda } from "@prisma/client";

export interface ProdutoCreateDTO {
    nome: string;
    preco: number;
    descricao: string;
    quantidade: number;
    dataDeFabricacao?: Date;
    dataDeValidade?: Date;
}