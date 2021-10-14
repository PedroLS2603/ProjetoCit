import { Produto } from './produto';

export class Item {
    produto: Produto;
    qtd: number;

    constructor(produto: Produto) {
        this.produto = produto;
        this.qtd = 1;
    }
}