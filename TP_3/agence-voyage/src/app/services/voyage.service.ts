import { Injectable } from '@angular/core';
import { Voyage } from '../modele/voyage.model';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../data';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private voyages: Voyage[] = [];

  constructor() {
    this.chargerDepuisLocalStorage();
  }

  private sauvegarderDansLocalStorage(): void {
    localStorage.setItem('voyages', JSON.stringify(this.voyages));
  }

  private chargerDepuisLocalStorage(): void {
    const data = localStorage.getItem('voyages');
    if (data) {
      this.voyages = JSON.parse(data);
    } else {
      this.genererVoyagesInitiaux();
      this.sauvegarderDansLocalStorage();
    }
  }

  private genererVoyagesInitiaux(): void {
    for (let i = 0; i < 5; i++) {
      this.voyages.push(this.genererVoyageAleatoire());
    }
  }

  getVoyages(): Voyage[] {
    return this.voyages;
  }

  getVoyageById(id: string): Voyage | undefined {
    return this.voyages.find(v => v.id === id);
  }

  ajouterVoyage(voyage: Voyage): void {
    this.voyages.push(voyage);
    this.sauvegarderDansLocalStorage();
  }

  supprimerVoyage(id: string): void {
    this.voyages = this.voyages.filter(v => v.id !== id);
    this.sauvegarderDansLocalStorage();
  }

  private genererVoyageAleatoire(): Voyage {
    return {
      id: Math.random().toString(36).substring(2, 9),
      destination: DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)],
      description: DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)],
      prix: PRIX[Math.floor(Math.random() * PRIX.length)]
    };
  }
}
