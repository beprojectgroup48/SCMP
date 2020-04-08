import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistOutgoingOrdersComponent } from './pharm-outgoing-orders.component';

describe('PharmacistOutgoingOrdersComponent', () => {
  let component: PharmacistOutgoingOrdersComponent;
  let fixture: ComponentFixture<PharmacistOutgoingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistOutgoingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistOutgoingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
