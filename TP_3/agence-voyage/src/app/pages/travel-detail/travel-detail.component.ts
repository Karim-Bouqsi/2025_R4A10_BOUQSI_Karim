import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from '../../modele/voyage.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-travel-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.scss']
})
export class TravelDetailComponent implements OnInit {
  voyage!: Voyage;

  constructor(
    private route: ActivatedRoute,
    private voyageService: VoyageService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const voyageTrouve = this.voyageService.getVoyageById(id);
      if (voyageTrouve) {
        this.voyage = voyageTrouve;
      } else {
        this.router.navigate(['/home']);
      }
            if (!this.voyage) {
        this.router.navigate(['/home']);
      }
    }
  }

  supprimerVoyage() {
    if (this.voyage) {
      const confirmation = confirm(`Voulez-vous vraiment supprimer "${this.voyage.destination}" ?`);
      if (confirmation) {
        this.voyageService.supprimerVoyage(this.voyage.id);
        this.router.navigate(['/home']);
      }
    }
  }
  
  retourAccueil() {
    this.router.navigate(['/home']);
  }
}
