import { Component } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-compare-page',
  standalone: true,
  imports: [
    MenuBarModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './compare-page.component.html',
  styleUrl: './compare-page.component.css'
})
export class ComparePageComponent {

}
