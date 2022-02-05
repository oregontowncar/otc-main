import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyMattersComponent } from './safety-matters.component';

describe('SafetyMattersComponent', () => {
  let component: SafetyMattersComponent;
  let fixture: ComponentFixture<SafetyMattersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyMattersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
