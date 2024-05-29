import { Component, Input } from '@angular/core';
import { ProfileDropdownComponent } from '../profile-dropdown/profile-dropdown.component';
import { CommonModule } from '@angular/common';
import { NotoficaionsDropdownComponent } from '../notoficaions-dropdown/notoficaions-dropdown.component';
import { INotification } from '../../interfaces/notification.interface';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    ProfileDropdownComponent,
    NotoficaionsDropdownComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  constructor(
    private router: Router,
    private searchService: SearchService,
  ) {}

  @Input() disabled = false;
  @Input() admin = false;
  notifications: INotification[] = [];

  accVisible = false;
  notifVisible = false;

  searchText = '';

  accVisibility() {
    this.accVisible = !this.accVisible;
    this.notifVisible = false;
  }

  notifVisibility() {
    this.notifVisible = !this.notifVisible;
    this.accVisible = false;
  }

  navigate() {

    switch (this.router.url) {
      case '/compare':
      case '/settings/products':
      case '/admin/users':
        break;
      case '/admin/settings':
        this.router.navigate(['/admin/users']);
        break;
      default:
        this.router.navigate(['/competitors']);
    }
  }

  search() {
    this.searchService.setSearchText(this.searchText)
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
