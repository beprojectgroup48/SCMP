import { DistributorAddItemsComponent } from './dis-add-items.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('DistributorAddItemsComponent', () => {
  let component: DistributorAddItemsComponent;
  let fixture: ComponentFixture<DistributorAddItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorAddItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
