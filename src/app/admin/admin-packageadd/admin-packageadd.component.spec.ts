import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPackageAddComponent } from './admin-packageadd.component';

describe('AdminPackageAddComponent', () => {
  let component: AdminPackageAddComponent;
  let fixture: ComponentFixture<AdminPackageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPackageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPackageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
