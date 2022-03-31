import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditleavesComponent } from './add-or-editleaves.component';

describe('AddOrEditleavesComponent', () => {
  let component: AddOrEditleavesComponent;
  let fixture: ComponentFixture<AddOrEditleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditleavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
