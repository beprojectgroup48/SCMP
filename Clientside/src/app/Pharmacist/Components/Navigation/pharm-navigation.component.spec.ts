import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistNavigationComponent } from './pharm-navigation.component';

describe('PharmacistNavigationComponent', () => {
  let component: PharmacistNavigationComponent;
  let fixture: ComponentFixture<PharmacistNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
