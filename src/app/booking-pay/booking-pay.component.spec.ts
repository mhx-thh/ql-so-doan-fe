import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPayComponent } from './booking-pay.component';

describe('BookingPayComponent', () => {
  let component: BookingPayComponent;
  let fixture: ComponentFixture<BookingPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
