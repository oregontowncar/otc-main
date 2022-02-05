import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessMoveComponent } from './business-move.component';

describe('BusinessMoveComponent', () => {
  let component: BusinessMoveComponent;
  let fixture: ComponentFixture<BusinessMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
