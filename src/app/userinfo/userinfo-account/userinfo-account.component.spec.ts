import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoAccountComponent } from './userinfo-account.component';

describe('UserinfoComponentAccount', () => {
  let component: UserinfoAccountComponent;
  let fixture: ComponentFixture<UserinfoAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
