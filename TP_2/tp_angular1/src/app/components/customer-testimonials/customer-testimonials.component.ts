import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialSlideComponent } from './testimonial-slide/testimonial-slide.component';
import { CarouselNavigationComponent } from './carousel-navigation/carousel-navigation.component';

interface Testimonial {
  name: string;
  position: string;
  image: string;
  text: string;
}

@Component({
  selector: 'app-customer-testimonials',
  standalone: true,
  imports: [CommonModule, TestimonialSlideComponent, CarouselNavigationComponent],
  templateUrl: './customer-testimonials.component.html',
  styleUrl: './customer-testimonials.component.scss',
})
export class CustomerTestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Edward Newgate',
      position: 'Founder Circle',
      image: 'assets/lego_1.jpg',
      text: 'Our dedicated patient engagement app and web portal allow you to access information instantly without tedious forms, long calls, or administrative hassle and securely.',
    },
    {
      name: 'Jane Doe',
      position: 'CEO of MedCare',
      image: 'assets/lego_2.jpg',
      text: 'Amazing service, fast and reliable!',
    },
    {
      name: 'John Smith',
      position: 'Healthcare Expert',
      image: 'assets/lego_3.jpg',
      text: 'I highly recommend their platform!',
    }
  ];

  currentSlide: number = 0;

  onSlideChanged(newIndex: number): void {
    this.currentSlide = newIndex;
  }
}
