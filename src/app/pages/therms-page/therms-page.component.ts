import { Component } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';

@Component({
  selector: 'app-therms-page',
  standalone: true,
  imports: [
    MenuBarModule,
  ],
  templateUrl: './therms-page.component.html',
  styleUrl: './therms-page.component.css'
})
export class ThermsPageComponent {

}
