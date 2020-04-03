import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerNavigationComponent } from './manu-navigation.component';

describe('NavigationComponent', () => {
  let component: ManufacturerNavigationComponent;
  let fixture: ComponentFixture<ManufacturerNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
