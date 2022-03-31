import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditjobComponent } from './add-or-editjob.component';

describe('AddOrEditjobComponent', () => {
  let component: AddOrEditjobComponent;
  let fixture: ComponentFixture<AddOrEditjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
