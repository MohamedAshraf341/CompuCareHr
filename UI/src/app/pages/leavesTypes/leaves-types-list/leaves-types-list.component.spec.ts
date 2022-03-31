import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesTypesListComponent } from './leaves-types-list.component';

describe('LeavesTypesListComponent', () => {
  let component: LeavesTypesListComponent;
  let fixture: ComponentFixture<LeavesTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavesTypesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
