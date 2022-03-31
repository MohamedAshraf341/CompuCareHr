import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcostComponent } from './listcost.component';

describe('ListcostComponent', () => {
  let component: ListcostComponent;
  let fixture: ComponentFixture<ListcostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
