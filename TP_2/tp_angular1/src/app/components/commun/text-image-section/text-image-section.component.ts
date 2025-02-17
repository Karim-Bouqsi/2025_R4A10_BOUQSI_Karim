import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../commun/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-image-section',
  standalone: true, 
  imports: [CommonModule, ButtonComponent],
  templateUrl: './text-image-section.component.html',
  styleUrls: ['./text-image-section.component.scss']
})
export class TextImageSectionComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() buttonText?: string; 
  @Input() buttonBgColor: string = 'blue'; 
  @Input() buttonTextColor: string = 'white'; 
  @Input() imageSrc!: string;
  @Input() buttonIcon?: string;
}
