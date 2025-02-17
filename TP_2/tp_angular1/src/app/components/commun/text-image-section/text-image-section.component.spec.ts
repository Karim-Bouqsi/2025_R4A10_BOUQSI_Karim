import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageSectionComponent } from './text-image-section.component';

describe('TextImageSectionComponent', () => {
  let component: TextImageSectionComponent;
  let fixture: ComponentFixture<TextImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImageSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
