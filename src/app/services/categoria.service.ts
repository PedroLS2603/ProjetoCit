import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl: string = "http://localhost:8080/apiCit_war_exploded/api/";


  constructor(private http: HttpClient) { }

  public getCategorias () {
    return this.http.get<Array<Categoria>>(this.baseUrl + "categoria");
  }
}
