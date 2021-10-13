import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEnderecoUsuarioComponent } from './pagina-endereco-usuario.component';

describe('PaginaEnderecoUsuarioComponent', () => {
  let component: PaginaEnderecoUsuarioComponent;
  let fixture: ComponentFixture<PaginaEnderecoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEnderecoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaEnderecoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
