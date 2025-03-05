import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Voyage } from '../../modele/voyage.model';
import { CommonModule } from '@angular/common';
import { VoyageCardComponent } from '../voyage-card/voyage-card.component';

@Component({
  selector: 'app-voyage-list',
  standalone: true,
  imports: [CommonModule, VoyageCardComponent],
  templateUrl: './voyage-list.component.html',
  styleUrls: ['./voyage-list.component.scss']
})
export class VoyageListComponent {
  @Input() voyages!: Voyage[];
  @Output() supprimerVoyage = new EventEmitter<string>();

  supprimer(id: string) {
    this.supprimerVoyage.emit(id);
  }
}
