import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListjobLevelComponent } from './listjob-level.component';

describe('ListjobLevelComponent', () => {
  let component: ListjobLevelComponent;
  let fixture: ComponentFixture<ListjobLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListjobLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListjobLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
