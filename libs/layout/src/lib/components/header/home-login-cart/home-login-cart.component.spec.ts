import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoginCartComponent } from './home-login-cart.component';

describe('HomeLoginCartComponent', () => {
  let component: HomeLoginCartComponent;
  let fixture: ComponentFixture<HomeLoginCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLoginCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoginCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
