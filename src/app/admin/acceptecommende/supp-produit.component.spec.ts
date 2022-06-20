import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppProduitComponent } from './supp-produit.component';

describe('SuppProduitComponent', () => {
  let component: SuppProduitComponent;
  let fixture: ComponentFixture<SuppProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
