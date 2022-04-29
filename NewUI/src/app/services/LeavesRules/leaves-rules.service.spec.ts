import { TestBed } from '@angular/core/testing';

import { LeavesRulesService } from './leaves-rules.service';

describe('LeavesRulesService', () => {
  let service: LeavesRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavesRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
