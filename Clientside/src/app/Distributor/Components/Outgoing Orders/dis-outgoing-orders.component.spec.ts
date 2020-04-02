import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorOutgoingOrdersComponent } from './dis-outgoing-orders.component';

describe('DistributorOutgoingOrdersComponent', () => {
  let component: DistributorOutgoingOrdersComponent;
  let fixture: ComponentFixture<DistributorOutgoingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorOutgoingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorOutgoingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
