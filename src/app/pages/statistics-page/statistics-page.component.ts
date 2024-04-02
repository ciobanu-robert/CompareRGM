import { Component } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';

@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [
      MenuBarModule,
  ],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.css'
})
export class StatisticsPageComponent {

}
