import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorChangePasswordComponent } from './dis-change-password.component';

describe('DistributorChangePasswordComponent', () => {
  let component: DistributorChangePasswordComponent;
  let fixture: ComponentFixture<DistributorChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
