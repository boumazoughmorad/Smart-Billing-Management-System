import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GategorieComponent } from './gategorie.component';

describe('GategorieComponent', () => {
  let component: GategorieComponent;
  let fixture: ComponentFixture<GategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
