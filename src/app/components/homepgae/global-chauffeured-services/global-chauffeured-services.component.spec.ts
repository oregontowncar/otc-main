import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalChauffeuredServicesComponent } from './global-chauffeured-services.component';

describe('GlobalChauffeuredServicesComponent', () => {
  let component: GlobalChauffeuredServicesComponent;
  let fixture: ComponentFixture<GlobalChauffeuredServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalChauffeuredServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalChauffeuredServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
