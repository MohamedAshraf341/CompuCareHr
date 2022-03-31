import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditcostComponent } from './add-or-editcost.component';

describe('AddOrEditcostComponent', () => {
  let component: AddOrEditcostComponent;
  let fixture: ComponentFixture<AddOrEditcostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditcostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
