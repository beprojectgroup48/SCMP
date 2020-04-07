import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistAddItemsComponent } from './pharm-add-items.component';

describe('PharmacistAddItemsComponent', () => {
  let component: PharmacistAddItemsComponent;
  let fixture: ComponentFixture<PharmacistAddItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistAddItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
