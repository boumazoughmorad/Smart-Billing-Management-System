import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppFactoryComponent } from './supp-factory.component';

describe('SuppFactoryComponent', () => {
  let component: SuppFactoryComponent;
  let fixture: ComponentFixture<SuppFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
