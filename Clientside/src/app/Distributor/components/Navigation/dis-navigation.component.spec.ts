import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorNavigationComponent } from './dis-navigation.component';

describe('NavigationComponent', () => {
  let component: DistributorNavigationComponent;
  let fixture: ComponentFixture<DistributorNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
