import { Component } from '@angular/core';
import { LogoComponent } from '../commun/logo/logo.component';
import { NavigationComponent } from '../commun/navigation/navigation.component';
import { ButtonComponent } from '../commun/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, NavigationComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
