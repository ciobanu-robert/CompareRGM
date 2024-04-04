import { Component, Input } from '@angular/core';
import { ProfileDropdownComponent } from '../profile-dropdown/profile-dropdown.component';
import { CommonModule } from '@angular/common';
import { NotoficaionsDropdownComponent } from '../notoficaions-dropdown/notoficaions-dropdown.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    ProfileDropdownComponent,
    NotoficaionsDropdownComponent,
    CommonModule,
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  @Input() disabled = false;

  accVisible = false;
  notifVisible = false;

  accVisibility() {
    this.accVisible = !this.accVisible;
    this.notifVisible = false;
  }

  notifVisibility() {
    this.notifVisible = !this.notifVisible;
    this.accVisible = false;
  }
}
