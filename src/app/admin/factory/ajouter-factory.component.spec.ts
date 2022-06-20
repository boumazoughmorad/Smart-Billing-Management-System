import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFactoryComponent } from './ajouter-factory.component';

describe('AjouterClientComponent', () => {
  let component: AjouterFactoryComponent;
  let fixture: ComponentFixture< AjouterFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  AjouterFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( AjouterFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
