import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessMeetingsComponent } from './business-meetings.component';

describe('BusinessMeetingsComponent', () => {
  let component: BusinessMeetingsComponent;
  let fixture: ComponentFixture<BusinessMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessMeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
