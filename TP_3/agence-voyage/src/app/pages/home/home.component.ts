import { Component } from '@angular/core';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from '../../modele/voyage.model';
import { CommonModule } from '@angular/common';
import { VoyageListComponent } from '../../components/voyage-list/voyage-list.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VoyageListComponent, PaginationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  voyages: Voyage[] = [];
  voyagesParPage = 20;
  pageActuelle = 1;

  constructor(private voyageService: VoyageService) {}

  ngOnInit() {
    this.voyages = this.voyageService.getVoyages();
  }
  get voyagesAffiches(): Voyage[] {
    const startIndex = (this.pageActuelle - 1) * this.voyagesParPage;
    return this.voyages.slice(startIndex, startIndex + this.voyagesParPage);
  }

  supprimerVoyage(id: string) {
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer ce voyage ?");
    if (confirmation) {
      this.voyageService.supprimerVoyage(id);
      this.voyages = this.voyageService.getVoyages();
    }
  }  

  pagePrecedente() {
    if (this.pageActuelle > 1) {
      this.pageActuelle--;
    }
  }

  pageSuivante() {
    if (this.pageActuelle * this.voyagesParPage < this.voyages.length) {
      this.pageActuelle++;
    }
  }
}
