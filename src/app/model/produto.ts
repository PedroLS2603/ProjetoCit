export class Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    idVendedor: number;
    categoria: string;


    constructor (id: number, nome: string, descricao: string, preco: number, idVendedor: number, categoria: string){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.idVendedor = idVendedor;
        this.categoria = categoria;
    }
}