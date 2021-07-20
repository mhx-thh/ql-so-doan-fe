import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoServiceComponent } from './userinfo-service.component';

describe('UserinfoServiceComponent', () => {
  let component: UserinfoServiceComponent;
  let fixture: ComponentFixture<UserinfoServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
