import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGeneratorComponent } from './travel-generator.component';

describe('TravelGeneratorComponent', () => {
  let component: TravelGeneratorComponent;
  let fixture: ComponentFixture<TravelGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
