import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpermissionsComponent } from './listpermissions.component';

describe('ListpermissionsComponent', () => {
  let component: ListpermissionsComponent;
  let fixture: ComponentFixture<ListpermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpermissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
