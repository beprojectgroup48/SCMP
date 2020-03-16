import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPharmacistComponent } from './list-of-pharmacist.component';

describe('ListOfPharmacistComponent', () => {
  let component: ListOfPharmacistComponent;
  let fixture: ComponentFixture<ListOfPharmacistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPharmacistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
