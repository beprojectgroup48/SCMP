import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerIncomingOrdersComponent } from './manu-incoming-orders.component';

describe('ManufacturerIncomingOrdersComponent', () => {
  let component: ManufacturerIncomingOrdersComponent;
  let fixture: ComponentFixture<ManufacturerIncomingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerIncomingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerIncomingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
