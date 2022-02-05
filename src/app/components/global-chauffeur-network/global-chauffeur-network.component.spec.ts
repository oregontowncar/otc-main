import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalChauffeurNetworkComponent } from './global-chauffeur-network.component';

describe('GlobalChauffeurNetworkComponent', () => {
  let component: GlobalChauffeurNetworkComponent;
  let fixture: ComponentFixture<GlobalChauffeurNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalChauffeurNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalChauffeurNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
