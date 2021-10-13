import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContaComponent } from './conta/conta.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { CardComponent } from './card/card.component';
import { ProdutoComponent } from './produto/produto.component';
import { PaginaNovoProdutoComponent } from './pagina-novo-produto/pagina-novo-produto.component';
import { PaginaEnderecoUsuarioComponent } from './pagina-endereco-usuario/pagina-endereco-usuario.component';
import { PaginaPedidoUsuarioComponent } from './pagina-pedido-usuario/pagina-pedido-usuario.component';
import { PaginaAnuncioUsuarioComponent } from './pagina-anuncio-usuario/pagina-anuncio-usuario.component'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PaginaLoginComponent,
    HeaderComponent,
    PaginaHomeComponent,
    CarrinhoComponent,
    ContaComponent,
    MenuLateralComponent,
    CardComponent,
    ProdutoComponent,
    PaginaNovoProdutoComponent,
    PaginaEnderecoUsuarioComponent,
    PaginaPedidoUsuarioComponent,
    PaginaAnuncioUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
