import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHeaderComponent } from './service-header/service-header.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ButtonComponent } from '../commun/button/button.component';

interface Service {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceHeaderComponent, ServiceCardComponent, ButtonComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    { title: 'Search doctor', description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals.', icon: 'assets/icons/search-doctor.png' },
    { title: 'Online pharmacy', description: 'Buy your medicines with our mobile application with a simple delivery system.', icon: 'assets/icons/online-pharmacie.png' },
    { title: 'Consultation', description: 'Free consultation with our trusted doctors and get the best recommendations.', icon: 'assets/icons/consultation.png' },
    { title: 'Details info', description: 'Free consultation with our trusted doctors and get the best recommendations.', icon: 'assets/icons/details-info.png' },
    { title: 'Emergency care', description: 'You can get 24/7 urgent care for yourself or your children and your lovely family.', icon: 'assets/icons/emergency-care.png' },
    { title: 'Tracking', description: 'Track and save your medical history and health data.', icon: 'assets/icons/tracking.png' }
  ];
}
