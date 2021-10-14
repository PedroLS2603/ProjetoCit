import { HttpClient } from '@angular/common/http';
import { CategoriaService } from './../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-pagina-novo-produto',
  templateUrl: './pagina-novo-produto.component.html',
  styleUrls: ['./pagina-novo-produto.component.css']
})
export class PaginaNovoProdutoComponent implements OnInit {

  baseUrl: string = "localhost:8080/api_demowar";
  categorias = new Array<Categoria>();
  constructor(private cs: CategoriaService) { }

  ngOnInit(): void {
    this.cs.getCategorias().subscribe(c => this.categorias = c);
  }

  submit(form: any) {
    console.log(form);
  }
}
