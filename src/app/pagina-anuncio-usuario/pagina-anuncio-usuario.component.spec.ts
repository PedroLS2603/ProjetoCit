import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAnuncioUsuarioComponent } from './pagina-anuncio-usuario.component';

describe('PaginaAnuncioUsuarioComponent', () => {
  let component: PaginaAnuncioUsuarioComponent;
  let fixture: ComponentFixture<PaginaAnuncioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAnuncioUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAnuncioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
