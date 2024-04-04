import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './menu-bar/topbar/topbar.component';
import { PagesModule } from './pages/pages.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    PagesModule,
    RouterOutlet, 
    RouterLink,
    RouterLinkActive,
    TopbarComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
