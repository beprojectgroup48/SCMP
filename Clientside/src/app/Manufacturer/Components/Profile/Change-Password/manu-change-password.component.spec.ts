import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerChangePasswordComponent } from './manu-change-password.component';

describe('UpdateProfileComponent', () => {
  let component: ManufacturerChangePasswordComponent;
  let fixture: ComponentFixture<ManufacturerChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
