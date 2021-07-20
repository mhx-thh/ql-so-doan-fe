import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerinfoPostComponent } from './partnerinfo-post.component';

describe('PartnerinfoPostComponent', () => {
  let component: PartnerinfoPostComponent;
  let fixture: ComponentFixture<PartnerinfoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerinfoPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerinfoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
