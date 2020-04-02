import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistViewOrderComponent } from './pharm-view-order.component';

describe('PharmacistViewOrderComponent', () => {
  let component: PharmacistViewOrderComponent;
  let fixture: ComponentFixture<PharmacistViewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistViewOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
