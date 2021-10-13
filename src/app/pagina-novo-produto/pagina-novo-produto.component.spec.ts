import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNovoProdutoComponent } from './pagina-novo-produto.component';

describe('PaginaNovoProdutoComponent', () => {
  let component: PaginaNovoProdutoComponent;
  let fixture: ComponentFixture<PaginaNovoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNovoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNovoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
