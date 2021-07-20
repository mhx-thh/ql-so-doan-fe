import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserRowComponent } from './admin-user--row.component';

describe('AdminUserRowComponent', () => {
  let component: AdminUserRowComponent;
  let fixture: ComponentFixture<AdminUserRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
