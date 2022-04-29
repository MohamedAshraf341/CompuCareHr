import { TestBed } from '@angular/core/testing';

import { LeavesTypesService } from './leaves-types.service';

describe('LeavesTypesService', () => {
  let service: LeavesTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavesTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
