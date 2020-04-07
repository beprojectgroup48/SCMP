import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistOrderComponent } from './pharm-order.component';

describe('PharmacistOrderComponent', () => {
  let component: PharmacistOrderComponent;
  let fixture: ComponentFixture<PharmacistOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
