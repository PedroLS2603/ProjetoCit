import { Item } from './item';
export class Pedido {
    id?: number;
    produtos?;
    total: number;
    idUsuario?: number;

    constructor(idUsuario?: number) {
        this.total = 0;
        this.produtos = new Array<Item | undefined>();
        this.idUsuario = idUsuario;
    }

}