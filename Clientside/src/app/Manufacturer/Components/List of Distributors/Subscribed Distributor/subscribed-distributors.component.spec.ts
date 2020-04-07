import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedDistributorsComponent } from './subscribed-distributors.component';

describe('SubscribedDistributorsComponent', () => {
  let component: SubscribedDistributorsComponent;
  let fixture: ComponentFixture<SubscribedDistributorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribedDistributorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribedDistributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
