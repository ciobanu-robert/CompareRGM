import { Component } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';

@Component({
  selector: 'app-competitors-page',
  standalone: true,
  imports: [
    MenuBarModule,
  ],
  templateUrl: './competitors-page.component.html',
  styleUrl: './competitors-page.component.css'
})
export class CompetitorsPageComponent {

}
