import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDestrComponent } from './login-destr.component';

describe('LoginDestrComponent', () => {
  let component: LoginDestrComponent;
  let fixture: ComponentFixture<LoginDestrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDestrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
