import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiemantComponent } from './piemant.component';

describe('PiemantComponent', () => {
  let component: PiemantComponent;
  let fixture: ComponentFixture<PiemantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiemantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiemantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
