import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoSidebarComponent } from './userinfo-sidebar.component';

describe('UserinfoComponent', () => {
  let component: UserinfoSidebarComponent;
  let fixture: ComponentFixture<UserinfoSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
