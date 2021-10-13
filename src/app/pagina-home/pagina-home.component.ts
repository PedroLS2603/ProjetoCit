import { Component, OnInit } from '@angular/core';


import { ProdutoService } from './../services/produto.service';
import { Produto } from './../model/produto';
import { Categoria } from './../model/categoria';
import { CategoriaService } from './../services/categoria.service';

@Component({
  selector: 'app-pagina-home',
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.css']
})
export class PaginaHomeComponent implements OnInit {
  produtos = new Array<Produto>();
  categorias = new Array<Categoria>();
  
  constructor(private ps: ProdutoService, private cs: CategoriaService) { }

  ngOnInit(): void {
    this.ps.getProdutos().subscribe(produtos => this.produtos = produtos);
    this.cs.getCategorias().subscribe(c => this.categorias = c);
  }
}
