import { Item } from './../model/item';
import { Pedido } from './../model/pedido';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  baseUrl: string = "http://localhost:8080/apiCit_war_exploded/api/";
  constructor(private http: HttpClient,
              private lgService: LoginService) { }


  public inserirPedido(pedido: Pedido) {
    return this.http.post<boolean>(this.baseUrl+"usuario/"+this.lgService.getUserId+"/pedido/cadastro", {idUsuario : pedido.idUsuario});
  }

  public inserirItem(item: Item | undefined, pedido: Pedido) {
    console.log({idProduto : item?.produto.id, idPedido: pedido.id, qtd: item?.qtd});
    return this.http.post<boolean>(this.baseUrl+"pedido/"+pedido.id+"/cadastro", 
    {idProduto : item?.produto.id, idPedido: pedido.id, qtd: item?.qtd});
  }

  public getUltimoPedido() {
    return this.http.get<Pedido>(this.baseUrl+"usuario/"+this.lgService.getUserId+"/pedido/consulta/ultimo");
  }
}
