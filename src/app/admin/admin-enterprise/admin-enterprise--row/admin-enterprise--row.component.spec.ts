import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnterpriseRowComponent } from './admin-enterprise--row.component';

describe('AdminEnterpriseRowComponent', () => {
  let component: AdminEnterpriseRowComponent;
  let fixture: ComponentFixture<AdminEnterpriseRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnterpriseRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnterpriseRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
