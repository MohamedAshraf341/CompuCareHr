import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditsectionComponent } from './add-or-editsection.component';

describe('AddOrEditsectionComponent', () => {
  let component: AddOrEditsectionComponent;
  let fixture: ComponentFixture<AddOrEditsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
