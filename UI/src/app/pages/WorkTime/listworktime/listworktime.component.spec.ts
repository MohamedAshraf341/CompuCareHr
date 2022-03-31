import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListworktimeComponent } from './listworktime.component';

describe('ListworktimeComponent', () => {
  let component: ListworktimeComponent;
  let fixture: ComponentFixture<ListworktimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListworktimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListworktimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
