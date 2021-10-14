import { CompraProdutoService } from './../services/compra-produto.service';
import { Router } from '@angular/router';
import { Produto } from './../model/produto';
import { Component, OnInit, Input } from '@angular/core';
import {Pedido} from '../model/pedido';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cpService: CompraProdutoService, private route: Router) { }

  @Input() produto?: Produto;
  @Input() produtosComprado? : Array<Produto | undefined>;

  ngOnInit(): void {
  }

  //Função de adicionar item ao carrinho
  addItem() {
    this.cpService.addProduto(this.produto);
  }
}
