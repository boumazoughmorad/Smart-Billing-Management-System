import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDestComponent } from './page-dest.component';

describe('PageDestComponent', () => {
  let component: PageDestComponent;
  let fixture: ComponentFixture<PageDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
