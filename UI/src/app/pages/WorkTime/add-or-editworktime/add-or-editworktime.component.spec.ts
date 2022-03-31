import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditworktimeComponent } from './add-or-editworktime.component';

describe('AddOrEditworktimeComponent', () => {
  let component: AddOrEditworktimeComponent;
  let fixture: ComponentFixture<AddOrEditworktimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditworktimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditworktimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
