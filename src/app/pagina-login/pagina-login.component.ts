import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent implements OnInit {
  constructor(private route:Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  submit (form: any) {
    this.loginService.logar(form.form.value.email, form.form.value.senha).subscribe(userExist => {
      if(userExist) {
        this.route.navigate(['/home']);
        this.loginService.logado = true;
      }
      else {
        console.log("Usuário não existe!");
      }
    });
  }
}
