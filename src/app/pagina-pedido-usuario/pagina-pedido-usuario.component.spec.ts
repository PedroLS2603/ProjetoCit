import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPedidoUsuarioComponent } from './pagina-pedido-usuario.component';

describe('PaginaPedidoUsuarioComponent', () => {
  let component: PaginaPedidoUsuarioComponent;
  let fixture: ComponentFixture<PaginaPedidoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPedidoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPedidoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
