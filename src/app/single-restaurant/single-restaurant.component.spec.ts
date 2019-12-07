import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRestaurantComponent } from './single-restaurant.component';

describe('SingleRestaurantComponent', () => {
  let component: SingleRestaurantComponent;
  let fixture: ComponentFixture<SingleRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
