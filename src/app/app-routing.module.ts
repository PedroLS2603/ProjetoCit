import { PaginaPedidoUsuarioComponent } from './pagina-pedido-usuario/pagina-pedido-usuario.component';
import { PaginaAnuncioUsuarioComponent } from './pagina-anuncio-usuario/pagina-anuncio-usuario.component';
import { PaginaEnderecoUsuarioComponent } from './pagina-endereco-usuario/pagina-endereco-usuario.component';
import { PaginaNovoProdutoComponent } from './pagina-novo-produto/pagina-novo-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContaComponent } from './conta/conta.component';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {path: '', component: PaginaLoginComponent},
  {path: 'home', component: PaginaHomeComponent},
  {path: 'conta', children : 
                               [{path:'', component: ContaComponent},
                                {path:'enderecos', component: PaginaEnderecoUsuarioComponent},
                                {path:'anuncios', component: PaginaAnuncioUsuarioComponent},
                                {path:'pedidos', component: PaginaPedidoUsuarioComponent}
                                ]},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'produto', children : [{path: '', component: ProdutoComponent},
                                {path: 'novo', component: PaginaNovoProdutoComponent},
                                {path: ':id', component: ProdutoComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
