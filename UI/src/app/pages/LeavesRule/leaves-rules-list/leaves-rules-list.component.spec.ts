import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesRulesListComponent } from './leaves-rules-list.component';

describe('LeavesRulesListComponent', () => {
  let component: LeavesRulesListComponent;
  let fixture: ComponentFixture<LeavesRulesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavesRulesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesRulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
