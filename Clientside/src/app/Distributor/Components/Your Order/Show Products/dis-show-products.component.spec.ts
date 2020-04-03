import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorShowProductsComponent } from './dis-show-products.component';

describe('DistributorShowProductsComponent', () => {
  let component: DistributorShowProductsComponent;
  let fixture: ComponentFixture<DistributorShowProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorShowProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorShowProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
