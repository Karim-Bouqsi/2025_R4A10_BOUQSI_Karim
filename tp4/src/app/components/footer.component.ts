import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <p>&copy; 2025 Gestion des Livres</p>
    </footer>
  `,
  styles: [
    `
      footer {
        background: #333;
        color: white;
        text-align: center;
        padding: 1rem;
        margin-top: 2rem;
      }
    `,
  ],
})
export class FooterComponent {}
