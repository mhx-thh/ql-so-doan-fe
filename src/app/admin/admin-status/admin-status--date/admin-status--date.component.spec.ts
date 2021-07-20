import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatusDateComponent } from './admin-status--date.component';

describe('AdminStatusDateComponent', () => {
  let component: AdminStatusDateComponent;
  let fixture: ComponentFixture<AdminStatusDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatusDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatusDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
