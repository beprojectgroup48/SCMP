import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorDashboardComponent } from './dis-dashboard.component';

describe('FirstComponent', () => {
  let component: DistributorDashboardComponent;
  let fixture: ComponentFixture<DistributorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
