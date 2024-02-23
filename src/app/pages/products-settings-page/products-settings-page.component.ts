import { Component } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-products-settings-page',
  standalone: true,
  imports: [
    MenuBarModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './products-settings-page.component.html',
  styleUrl: './products-settings-page.component.css'
})
export class ProductsSettingsPageComponent {

}
