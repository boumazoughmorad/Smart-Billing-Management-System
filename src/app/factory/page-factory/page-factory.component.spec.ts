import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFactoryComponent } from './page-factory.component';

describe('PageFactoryComponent', () => {
  let component: PageFactoryComponent;
  let fixture: ComponentFixture<PageFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
