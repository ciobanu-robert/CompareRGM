import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TopbarComponent } from '../../topbar/topbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TopbarComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
