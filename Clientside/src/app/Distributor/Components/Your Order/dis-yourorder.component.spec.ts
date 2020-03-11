import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorYourOrderComponent } from './dis-yourorder.component';

describe('YourOrderComponent', () => {
  let component: DistributorYourOrderComponent;
  let fixture: ComponentFixture<DistributorYourOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorYourOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorYourOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
