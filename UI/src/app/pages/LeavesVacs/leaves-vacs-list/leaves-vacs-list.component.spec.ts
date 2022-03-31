import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesVacsListComponent } from './leaves-vacs-list.component';

describe('LeavesVacsListComponent', () => {
  let component: LeavesVacsListComponent;
  let fixture: ComponentFixture<LeavesVacsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavesVacsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesVacsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
