import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() pageActuelle!: number;
  @Input() voyagesParPage!: number;
  @Input() totalVoyages!: number;

  @Output() pagePrecedente = new EventEmitter<void>();
  @Output() pageSuivante = new EventEmitter<void>();
}
