import { TestBed } from '@angular/core/testing';

import { TokenStorageGuard } from './token-storage.guard';

describe('TokenStorageGuard', () => {
  let guard: TokenStorageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TokenStorageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
