import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerAddItemsComponent } from './manu-add-items.component';

describe('ManufacturerAddItemsComponent', () => {
  let component: ManufacturerAddItemsComponent;
  let fixture: ComponentFixture<ManufacturerAddItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerAddItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
