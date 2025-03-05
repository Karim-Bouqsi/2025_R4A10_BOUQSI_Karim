import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Voyage } from '../../modele/voyage.model';

@Component({
  selector: 'app-voyage-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './voyage-card.component.html',
  styleUrls: ['./voyage-card.component.scss']
})
export class VoyageCardComponent {
  @Input() voyage!: Voyage;
  @Output() supprimer = new EventEmitter<string>();

  supprimerVoyage() {
    this.supprimer.emit(this.voyage.id);
  }
}
