import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TravelDetailComponent } from './pages/travel-detail/travel-detail.component';
import { TravelGeneratorComponent } from './pages/travel-generator/travel-generator.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'travel/:id', component: TravelDetailComponent },
  { path: 'generate', component: TravelGeneratorComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
