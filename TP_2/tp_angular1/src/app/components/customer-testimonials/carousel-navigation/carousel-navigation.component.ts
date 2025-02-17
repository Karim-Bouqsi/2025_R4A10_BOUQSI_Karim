import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.scss']
})
export class CarouselNavigationComponent {
  @Input() totalSlides: number = 3;
  @Input() currentSlide: number = 0;
  @Output() slideChanged = new EventEmitter<number>();

  prevSlide() {
    if (this.currentSlide > 0) {
      this.slideChanged.emit(this.currentSlide - 1);
    } else {
      this.slideChanged.emit(this.totalSlides - 1);
    }
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.slideChanged.emit(this.currentSlide + 1);
    } else {
      this.slideChanged.emit(0);
    }
  }

  totalSlidesArray() {
    return Array.from(Array(this.totalSlides).keys());
  }
}
