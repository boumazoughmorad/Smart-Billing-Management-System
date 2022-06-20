import { TestBed } from '@angular/core/testing';

import { AuthadminInterceptoreService } from './authadmin-interceptore.service';

describe('AuthadminInterceptoreService', () => {
  let service: AuthadminInterceptoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthadminInterceptoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
