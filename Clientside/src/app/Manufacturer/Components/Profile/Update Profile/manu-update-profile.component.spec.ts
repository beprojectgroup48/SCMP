import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerUpdateProfileComponent } from './manu-update-profile.component';

describe('ManufacturerUpdateProfileComponent', () => {
  let component: ManufacturerUpdateProfileComponent;
  let fixture: ComponentFixture<ManufacturerUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
