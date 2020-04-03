import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorIncomingOrdersComponent } from './dis-incoming-orders.component';

describe('DistributorIncomingOrdersComponent', () => {
  let component: DistributorIncomingOrdersComponent;
  let fixture: ComponentFixture<DistributorIncomingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorIncomingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorIncomingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
