import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurChauffeurComponent } from './our-chauffeur.component';

describe('OurChauffeurComponent', () => {
  let component: OurChauffeurComponent;
  let fixture: ComponentFixture<OurChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurChauffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
