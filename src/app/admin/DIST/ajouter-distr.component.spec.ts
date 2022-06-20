import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDistrComponent } from './ajouter-distr.component';

describe('AjouterDistrComponent', () => {
  let component: AjouterDistrComponent;
  let fixture: ComponentFixture<AjouterDistrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDistrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDistrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
