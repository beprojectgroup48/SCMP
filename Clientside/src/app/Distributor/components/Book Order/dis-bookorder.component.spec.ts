import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorBookOrderComponent } from './dis-bookorder.component';

describe('SecondComponent', () => {
  let component: DistributorBookOrderComponent;
  let fixture: ComponentFixture<DistributorBookOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorBookOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorBookOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
