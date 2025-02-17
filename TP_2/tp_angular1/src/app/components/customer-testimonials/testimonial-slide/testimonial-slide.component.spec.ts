import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSlideComponent } from './testimonial-slide.component';

describe('TestimonialSlideComponent', () => {
  let component: TestimonialSlideComponent;
  let fixture: ComponentFixture<TestimonialSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
