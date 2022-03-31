import { TestBed } from '@angular/core/testing';

import { LeavesVacsService } from './leaves-vacs.service';

describe('LeavesVacsService', () => {
  let service: LeavesVacsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavesVacsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
