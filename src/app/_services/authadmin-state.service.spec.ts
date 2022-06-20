import { TestBed } from '@angular/core/testing';

import { AuthadminStateService } from './authadmin-state.service';

describe('AuthadminStateService', () => {
  let service: AuthadminStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthadminStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
