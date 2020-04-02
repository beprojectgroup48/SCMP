import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorUpdateProfileComponent } from './dis-update-profile.component';

describe('DistributorUpdateProfileComponent', () => {
  let component: DistributorUpdateProfileComponent;
  let fixture: ComponentFixture<DistributorUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
