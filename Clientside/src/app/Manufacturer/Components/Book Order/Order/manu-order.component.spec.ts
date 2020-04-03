import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerOrderComponent } from './manu-order.component';

describe('ManufacturerOrderComponent', () => {
  let component: ManufacturerOrderComponent;
  let fixture: ComponentFixture<ManufacturerOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
