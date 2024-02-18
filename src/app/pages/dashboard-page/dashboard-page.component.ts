import { Component } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    MenuBarModule,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
