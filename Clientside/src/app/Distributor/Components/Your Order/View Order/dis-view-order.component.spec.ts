import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorViewOrderComponent } from './dis-view-order.component';

describe('DistributorViewOrderComponent', () => {
  let component: DistributorViewOrderComponent;
  let fixture: ComponentFixture<DistributorViewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorViewOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
