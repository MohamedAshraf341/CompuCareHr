import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditshiftComponent } from './add-or-editshift.component';

describe('AddOrEditshiftComponent', () => {
  let component: AddOrEditshiftComponent;
  let fixture: ComponentFixture<AddOrEditshiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditshiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
