import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerinfoSidebarComponent } from './partnerinfo-sidebar.component';

describe('PartnerinfoSidebarComponent', () => {
  let component: PartnerinfoSidebarComponent;
  let fixture: ComponentFixture<PartnerinfoSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerinfoSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerinfoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
