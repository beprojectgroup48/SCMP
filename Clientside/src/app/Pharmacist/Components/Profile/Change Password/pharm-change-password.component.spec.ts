import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistChangePasswordComponent } from './pharm-change-password.component';

describe('PharmacistChangePasswordComponent', () => {
  let component: PharmacistChangePasswordComponent;
  let fixture: ComponentFixture<PharmacistChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
