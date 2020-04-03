import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistUpdateProfileComponent } from './pharm-update-profile.component';

describe('PharmacistUpdateProfileComponent', () => {
  let component: PharmacistUpdateProfileComponent;
  let fixture: ComponentFixture<PharmacistUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
