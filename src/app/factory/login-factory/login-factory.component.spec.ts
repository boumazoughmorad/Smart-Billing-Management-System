import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFactoryComponent } from './login-factory.component';

describe('LoginFactoryComponent', () => {
  let component: LoginFactoryComponent;
  let fixture: ComponentFixture<LoginFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
