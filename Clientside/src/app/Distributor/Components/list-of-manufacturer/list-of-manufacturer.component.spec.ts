import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfManufacturerComponent } from './list-of-manufacturer.component';

describe('ListOfManufacturerComponent', () => {
  let component: ListOfManufacturerComponent;
  let fixture: ComponentFixture<ListOfManufacturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfManufacturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
