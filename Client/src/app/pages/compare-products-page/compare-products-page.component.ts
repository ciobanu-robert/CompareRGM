import { Component } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-compare-products-page',
  standalone: true,
  imports: [
    MenuBarModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './compare-products-page.component.html',
  styleUrl: './compare-products-page.component.css'
})
export class CompareProductsPageComponent {

}
