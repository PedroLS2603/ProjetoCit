export class User {
    id?: number;
    nome: string;
    cpf: string;
    email: string;
    senha: string;

    constructor(nome: string, cpf: string, email: string, senha:string, id?: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        if(id) {
            this.id = id;
        }
    }
}