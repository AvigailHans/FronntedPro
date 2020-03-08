import { TestBed } from '@angular/core/testing';

import { QuesstionService } from './quesstion.service';

describe('QuesstionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuesstionService = TestBed.get(QuesstionService);
    expect(service).toBeTruthy();
  });
});
