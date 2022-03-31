import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditPublicHolidayComponent } from './add-or-edit-public-holiday.component';

describe('AddOrEditPublicHolidayComponent', () => {
  let component: AddOrEditPublicHolidayComponent;
  let fixture: ComponentFixture<AddOrEditPublicHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditPublicHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditPublicHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
