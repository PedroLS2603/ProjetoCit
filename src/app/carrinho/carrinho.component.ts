import { Router } from '@angular/router';
import { PedidoService } from './../services/pedido.service';
import { LoginService } from './../services/login.service';
import { Item } from './../model/item';
import { CompraProdutoService } from './../services/compra-produto.service';
import { Component, OnInit, Input } from '@angular/core';
import {Pedido} from '../model/pedido';
import {Produto} from '../model/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {


  //Declaração de variáveis
   total: number = 0;
   produtos?: Array<Item|undefined>; 

   constructor(private cpService: CompraProdutoService, 
               private lgService: LoginService, 
               private pdService: PedidoService,
               private route: Router) { }


  //Iniciando o componente com os produtos
  ngOnInit(): void {
    this.produtos = this.cpService.getProdutos();
    this.total = this.calcultaTotal();
  }


  //Método que calcula o total da compra
  calcultaTotal(): number {
    let total = 0;
    if(this.produtos) {
      for(let i = 0; i < this.produtos?.length; i++) {
        let item = this.produtos[i]
        if(item) {
          total += item.qtd * item.produto.preco;
        }
      }
    }
    return total;
  }

  //Adiciona 1 na quantidade de produtos de um item
  addQtdProduto(item: Item) {
    item.qtd++;
    if(this.produtos){
      for(let i = 0; i < this.produtos?.length; i++) {
        let tmpItem: Item | undefined = this.produtos[i];

        if(tmpItem && tmpItem.produto.id === item.produto.id) {
          this.produtos[i] = item;
        }
      }
    }
    this.total = this.calcultaTotal();
  }

  //Remove 1 na quantidade de produtos de um item
  rmvQtdProduto(item: Item) {
    if(item.qtd > 1) {
      item.qtd--;
      if(this.produtos){
        for(let i = 0; i < this.produtos?.length; i++) {
          let tmpItem: Item | undefined = this.produtos[i];

          if(tmpItem && tmpItem.produto.id === item.produto.id) {
            this.produtos[i] = item;
          }
        }
      }
    }
    else {
      if(this.produtos){
        for(let i = 0; i < this.produtos?.length; i++) {
          let tmpItem: Item | undefined = this.produtos[i];

          if(tmpItem && tmpItem.produto.id === item.produto.id) {
            this.produtos.splice(i);
          }
        }
      }
    }
    this.total = this.calcultaTotal();
  }


  //Gera uma instância de pedido
  public gerarPedido(): Pedido {
    let idUsuario = this.lgService.getUserId();
    
    let pedido = new Pedido(idUsuario);


    if(this.produtos && pedido.produtos) {
      for(let i = 0; i < this.produtos?.length; i++){
        let produto = this.produtos[i]
        if(produto){
          pedido.produtos[i] = produto;
        }
      }
    }


    pedido.total = this.calcultaTotal();

    return pedido;
  }


  //Conclui o pedido inserindo ele no banco junto com os itens
  public concluirPedido() {
    if(this.produtos && this.produtos?.length > 0){
      let pedido = this.gerarPedido();

      //Chamada http para inserir pedido no banco
      this.pdService.inserirPedido(pedido).subscribe(sucesso => {
        //Em caso de sucesso, realiza mais uma série de chamadas http para inserir os itens relacionado ao id do pedido
        if(sucesso && pedido.produtos){ 
            for(let i = 0; i < pedido.produtos?.length; i++) {
              //Chamada http para receber o id do último pedido realizado, no caso o pedido cadastrado anteriormente
              this.pdService.getUltimoPedido().subscribe(
                ultimoPedido =>{
                  if(ultimoPedido) {
                    pedido.id = ultimoPedido.id;
                    
                    //Chamada http para cadastrar o item do produto ao pedido
                    if(pedido.produtos){
                      let item = pedido.produtos[i];
                      if(item) {
                        this.pdService.inserirItem(item, pedido).subscribe()
                    } 
                  } 
                }
              })
            }
            alert("Pedido realizado com sucesso!")
            this.cpService.limpaProdutos();
            this.route.navigate(['/home', {relativeTo: this.route}]);
          }
          else {
            alert("Erro ao cadastrar pedido!")
          }
        }
      )
    }
  } 
}