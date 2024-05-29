import { Component, OnInit } from '@angular/core';
import { TopbarComponent } from '../../menu-bar/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';
import { SearchService } from '../../services/search.service';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [
    TopbarComponent,
    CommonModule,
    FilterPipe,
  ],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent implements OnInit{
  constructor(private search: SearchService) {
    this.search.getSearchText.subscribe(text => this.searchText = text);
  }

  users: IUser[] = [];

  searchText = '';

  async admin(user: IUser) {
    user.admin = !user.admin;

    await fetch('/api/admin/change-admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user,
      })
    }).then((res) => res.json());
  }

  async ban(user: IUser) {
    user.banned = !user.banned;

    await fetch('/api/admin/change-ban', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user,
      })
    }).then((res) => res.json());
  }

  async ngOnInit() {
    const result = await fetch('/api/admin/users-list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
      })
    }).then((res) => res.json());

    this.users = result.data; 
  }
}
