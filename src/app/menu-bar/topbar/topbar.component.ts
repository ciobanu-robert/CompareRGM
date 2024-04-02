import { Component } from '@angular/core';
import { ProfileDropdownComponent } from '../profile-dropdown/profile-dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    ProfileDropdownComponent,
    CommonModule,
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  visible=false;

  Visibility() {
    this.visible = !this.visible;
  }
}
