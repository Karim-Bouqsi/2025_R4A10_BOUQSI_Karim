import { Component } from '@angular/core';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../../data';
import { Voyage } from '../../modele/voyage.model';
import { VoyageService } from '../../services/voyage.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-travel-generator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel-generator.component.html',
  styleUrls: ['./travel-generator.component.scss']
})
export class TravelGeneratorComponent {
  voyageGenere?: Voyage;

  constructor(private voyageService: VoyageService, private router: Router) {}

  genererVoyage(): void {
    const destination = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
    const description = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
    const prix = PRIX[Math.floor(Math.random() * PRIX.length)];
    const id = Math.random().toString().replace('.', '');

    this.voyageGenere = { id, destination, description, prix };
  }

  ajouterVoyage() {
    if (this.voyageGenere) {
      this.voyageService.ajouterVoyage(this.voyageGenere);
      this.router.navigate(['/home']);
    }
  }
  
}
