import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditjobLevelComponent } from './add-or-editjob-level.component';

describe('AddOrEditjobLevelComponent', () => {
  let component: AddOrEditjobLevelComponent;
  let fixture: ComponentFixture<AddOrEditjobLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditjobLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditjobLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
