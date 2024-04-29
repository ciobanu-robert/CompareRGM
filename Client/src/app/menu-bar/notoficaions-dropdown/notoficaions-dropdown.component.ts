import { AfterViewInit, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INotification } from '../../interfaces/notification.interface';

@Component({
  selector: 'app-notoficaions-dropdown',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './notoficaions-dropdown.component.html',
  styleUrl: './notoficaions-dropdown.component.css'
})
export class NotoficaionsDropdownComponent implements OnInit{
  notifications: INotification[] = [];
  countNotifications = this.notifications.length;

  async decline(notification: string | undefined) {
    const result = await fetch('/api/notifications/decline', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        notification,
        token: localStorage.getItem('token')
      })
    }).then((res) => res.json());
    this.notifications = result.data;
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
