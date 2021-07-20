import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoAddressAddComponent } from './userinfo-address--add.component';

describe('UserinfoAddressAddComponent', () => {
  let component: UserinfoAddressAddComponent;
  let fixture: ComponentFixture<UserinfoAddressAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoAddressAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoAddressAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
