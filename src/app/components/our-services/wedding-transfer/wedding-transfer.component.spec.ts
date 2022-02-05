import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingTransferComponent } from './wedding-transfer.component';

describe('WeddingTransferComponent', () => {
  let component: WeddingTransferComponent;
  let fixture: ComponentFixture<WeddingTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
