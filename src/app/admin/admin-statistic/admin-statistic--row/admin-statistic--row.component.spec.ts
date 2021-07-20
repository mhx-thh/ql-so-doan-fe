
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticRowComponent } from './admin-statistic--row.component';

describe('AdminStatisticRowComponent', () => {
  let component: AdminStatisticRowComponent;
  let fixture: ComponentFixture<AdminStatisticRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatisticRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatisticRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
