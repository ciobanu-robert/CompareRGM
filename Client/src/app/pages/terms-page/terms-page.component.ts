import { Component } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';

@Component({
  selector: 'app-terms-page',
  standalone: true,
  imports: [
    MenuBarModule,
  ],
  templateUrl: './terms-page.component.html',
  styleUrl: './terms-page.component.css'
})
export class TermsPageComponent {

}
