import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
   list: Array<String> =["Boné", "Camiseta", "Calça", "Celular", "Computador", "Carregador"];
   constructor() { }

  ngOnInit(): void {
  }

}
