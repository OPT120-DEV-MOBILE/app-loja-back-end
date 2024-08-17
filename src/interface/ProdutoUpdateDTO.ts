import { ProdutoCreateDTO } from "./ProdutoCreateDTO";

export interface ProdutoUpdateDTO extends ProdutoCreateDTO{
    id: number;    
}