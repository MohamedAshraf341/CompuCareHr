import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdderrandsComponent } from './adderrands.component';

describe('AdderrandsComponent', () => {
  let component: AdderrandsComponent;
  let fixture: ComponentFixture<AdderrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdderrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdderrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
