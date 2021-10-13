import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  baseUrl = "http://localhost:8080/apiCit_war_exploded/api/"
  constructor(private http: HttpClient) { }

  public getProdutos() {
    return this.http.get<Array<Produto>>(this.baseUrl + "produto/consulta");
  }
}
