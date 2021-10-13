import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logado:boolean = true;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  public checkStatusLogin(): boolean {
    this.logado = this.loginService.getStatusLogin();
    return this.logado;
  }
}
