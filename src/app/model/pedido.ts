export default class Pedido {
    id?: number;
    produtos?;
    total: number;
    idUsuario?: number;

    constructor() {
        this.total = 0.00;
        this.produtos = new Array<number>();
    }

}