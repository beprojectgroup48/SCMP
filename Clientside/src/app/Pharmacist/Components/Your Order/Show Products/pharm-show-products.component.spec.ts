import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistShowProductsComponent } from './pharm-show-products.component';

describe('PharmacistShowProductsComponent', () => {
  let component: PharmacistShowProductsComponent;
  let fixture: ComponentFixture<PharmacistShowProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistShowProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistShowProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
