import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageCardComponent } from './voyage-card.component';

describe('VoyageCardComponent', () => {
  let component: VoyageCardComponent;
  let fixture: ComponentFixture<VoyageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyageCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
