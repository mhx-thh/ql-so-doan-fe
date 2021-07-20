import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatusEventComponent } from './admin-status--event.component';

describe('AdminStatusEventComponent', () => {
  let component: AdminStatusEventComponent;
  let fixture: ComponentFixture<AdminStatusEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatusEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatusEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
