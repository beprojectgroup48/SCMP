import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerShowProductsComponent } from './manu-show-products.component';

describe('ManufacturerShowProductsComponent', () => {
  let component: ManufacturerShowProductsComponent;
  let fixture: ComponentFixture<ManufacturerShowProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerShowProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerShowProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
