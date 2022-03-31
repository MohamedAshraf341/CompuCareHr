import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditbranchComponent } from './add-or-editbranch.component';

describe('AddOrEditbranchComponent', () => {
  let component: AddOrEditbranchComponent;
  let fixture: ComponentFixture<AddOrEditbranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditbranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
