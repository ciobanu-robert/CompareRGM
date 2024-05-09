import { Component, Input, ViewChild } from '@angular/core';
import { ProfileDropdownComponent } from '../profile-dropdown/profile-dropdown.component';
import { CommonModule } from '@angular/common';
import { NotoficaionsDropdownComponent } from '../notoficaions-dropdown/notoficaions-dropdown.component';
import { INotification } from '../../interfaces/notification.interface';

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
  notifications: INotification[] = [];

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


  async ngOnInit() {
    const result = await fetch('/api/notifications/get-notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
      })
    }).then((res) => res.json());
    this.notifications = result.data;
  }
}
