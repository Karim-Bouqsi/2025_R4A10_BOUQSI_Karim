import { Component } from '@angular/core';
import { TextImageSectionComponent } from '../commun/text-image-section/text-image-section.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TextImageSectionComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
}
