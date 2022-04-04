import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerrandsComponent } from './listerrands.component';

describe('ListerrandsComponent', () => {
  let component: ListerrandsComponent;
  let fixture: ComponentFixture<ListerrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
