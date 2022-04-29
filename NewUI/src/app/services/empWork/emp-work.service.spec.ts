import { TestBed } from '@angular/core/testing';

import { EmpWorkService } from './emp-work.service';

describe('EmpWorkService', () => {
  let service: EmpWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
