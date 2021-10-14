import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string = "http://localhost:8080/apiCit_war_exploded/api/";
  logado: boolean = false;

  user: User = new User();

  constructor(private http: HttpClient) { }

  public logar(email: string, senha: string) {
    return this.http.post<User>(this.baseUrl + 'usuario/login', {email: email, senha: senha})
  }

  public getStatusLogin() {
    return this.logado;
  }

  public changeStatusLogin() {
    this.logado = !this.logado; 
  }

  public configUser(id?: number) {
    this.user.id = id;
  }

  public getUserId() {
      return this.user.id;
  }

}
