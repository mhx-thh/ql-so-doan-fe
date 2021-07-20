import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPackageTagComponent } from './admin-package--tag.component';

describe('AdminPackageTagComponent', () => {
  let component: AdminPackageTagComponent;
  let fixture: ComponentFixture<AdminPackageTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPackageTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPackageTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
