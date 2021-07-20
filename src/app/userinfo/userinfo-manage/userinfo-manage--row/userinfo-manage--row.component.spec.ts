import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoManageRowComponent } from './userinfo-manage--row.component';

describe('UserinfoManageRowComponent', () => {
  let component: UserinfoManageRowComponent;
  let fixture: ComponentFixture<UserinfoManageRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoManageRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoManageRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
