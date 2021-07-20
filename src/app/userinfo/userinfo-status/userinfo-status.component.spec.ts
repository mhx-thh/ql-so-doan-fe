import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoStatusComponent } from './userinfo-status.component';

describe('UserinfoStatusComponent', () => {
  let component: UserinfoStatusComponent;
  let fixture: ComponentFixture<UserinfoStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
