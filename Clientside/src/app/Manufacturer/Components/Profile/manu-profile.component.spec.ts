import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerProfileComponent } from './manu-profile.component';

describe('DistributorProfileComponent', () => {
  let component: ManufacturerProfileComponent;
  let fixture: ComponentFixture<ManufacturerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
