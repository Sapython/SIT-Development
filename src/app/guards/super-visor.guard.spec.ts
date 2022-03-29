import { TestBed } from '@angular/core/testing';

import { SuperVisorGuard } from './super-visor.guard';

describe('SuperVisorGuard', () => {
  let guard: SuperVisorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuperVisorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
