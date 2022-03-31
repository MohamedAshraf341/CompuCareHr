import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditbusComponent } from './add-or-editbus.component';

describe('AddOrEditbusComponent', () => {
  let component: AddOrEditbusComponent;
  let fixture: ComponentFixture<AddOrEditbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditbusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
