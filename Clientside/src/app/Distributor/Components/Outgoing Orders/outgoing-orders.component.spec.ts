import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingOrdersComponent } from './outgoing-orders.component';

describe('OutgoingOrdersComponent', () => {
  let component: OutgoingOrdersComponent;
  let fixture: ComponentFixture<OutgoingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutgoingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
