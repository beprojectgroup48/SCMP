import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedManufacturersComponent } from './subscribed-manufacturers.component';

describe('ListOfManufacturerComponent', () => {
  let component: SubscribedManufacturersComponent;
  let fixture: ComponentFixture<SubscribedManufacturersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribedManufacturersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribedManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
