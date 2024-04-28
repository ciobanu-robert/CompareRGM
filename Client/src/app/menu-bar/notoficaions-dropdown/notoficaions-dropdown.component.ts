import { Component, OnInit } from '@angular/core';
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

  async ngOnInit() {
    const result = await fetch('/api/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
      })
    }).then((res) => res.json());
    this.notifications = result.data;
    console.log(this.notifications)
  }
}
