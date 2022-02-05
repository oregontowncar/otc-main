import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentLetterComponent } from './president-letter.component';

describe('PresidentLetterComponent', () => {
  let component: PresidentLetterComponent;
  let fixture: ComponentFixture<PresidentLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresidentLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
