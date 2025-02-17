import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-slide',
  standalone: true,
  templateUrl: './testimonial-slide.component.html',
  styleUrl: './testimonial-slide.component.scss'
})
export class TestimonialSlideComponent {
  @Input() testimonial!: { name: string; position: string; image: string; text: string; };
}
