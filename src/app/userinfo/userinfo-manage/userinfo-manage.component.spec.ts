import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoManageComponent } from './userinfo-manage.component';

describe('UserinfoManageComponent', () => {
  let component: UserinfoManageComponent;
  let fixture: ComponentFixture<UserinfoManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
