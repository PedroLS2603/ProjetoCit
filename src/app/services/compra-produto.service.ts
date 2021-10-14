import { Item } from './../model/item';
import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CompraProdutoService {

  produtos = new Array<Item | undefined>();

  constructor() { }

  //Adiciona o produto ao carrinho
  addProduto (p: Produto | undefined) {
    if(p) {
      let item = new Item(p);
      item.produto = p;



      if(this.existeProduto(p)){

        let idProd = item.produto.id;

        for(let i = 0; i < this.produtos.length; i++) {
          let itm = this.produtos[i];

          if(itm){

            if(itm.produto.id === idProd) {
              itm.qtd++;
              this.produtos[i] = itm;
            }
          }
        }
      }

      else {
        this.produtos.push(item);
      }
    }
  }

  //Retorna a lista de produtos do carrinho
  getProdutos(): Array<Item | undefined> {
    return this.produtos;
  }

  //Zera a lista de produtos do carrinho
  limpaProdutos() {
    for(let i = 0; i < this.produtos.length; i++) {
      this.produtos.splice(i);
    }
  }

  //Verifica se o produto já existe dentro do carrinho
  private existeProduto(p: Produto): boolean {
    for(let i = 0; i < this.produtos.length; i++) {
      if(this.produtos[i]?.produto.id === p.id) {
        return true;
      }
    }
    return false;
  }
}
