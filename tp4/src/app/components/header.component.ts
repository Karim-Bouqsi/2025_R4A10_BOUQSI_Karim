import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <h1>Gestion des Livres</h1>
      <nav>
        <a routerLink="/">Accueil</a>
        <a routerLink="/book/create">Ajouter</a>
      </nav>
    </header>
  `,
  styles: [
    `
      header {
        background: #6200ea;
        color: white;
        padding: 1rem;
        text-align: center;
      }
      nav a {
        color: white;
        text-decoration: none;
        margin: 0 1rem;
      }
    `,
  ],
})
export class HeaderComponent {}
