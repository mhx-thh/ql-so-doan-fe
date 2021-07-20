import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnterpriseComponent } from './admin-enterprise.component';

describe('AdminEnterpriseComponent', () => {
  let component: AdminEnterpriseComponent;
  let fixture: ComponentFixture<AdminEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnterpriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
