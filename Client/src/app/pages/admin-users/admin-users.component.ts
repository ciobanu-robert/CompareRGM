import { Component, OnInit } from '@angular/core';
import { TopbarComponent } from '../../menu-bar/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';
import { SearchService } from '../../services/search.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ExcelService } from '../../services/excel.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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
  constructor(
    private search: SearchService,
    private excel: ExcelService,
    private user: UserService,
    private router: Router,
  ) {
    this.search.getSearchText.subscribe(text => this.searchText = text);
  }

  users: IUser[] = [];

  searchText = '';

  icon = 'fa-regular';

  hover(e: Event, user: IUser) {
    user.icon = e.type == 'mouseover' ? 'fa-solid' : 'fa-regular';
  }

  viewUser(user: IUser) {
    this.user.setUser(user);

    this.router.navigate([`/admin/user/${user._id}`])
  }

  download() {
    const downloadUsers = []

    for (let user of this.users) {
      downloadUsers.push(...[{
        ID: user._id,
        Email: user.email,
        Company: user.company,
        Admin: user.admin,
        Banned: user.banned,
      }]);
    }

    this.excel.exportAsExcelFile(downloadUsers, "users_list")
  }

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
    for(let user of this.users) {
      user.icon = this.icon;
    }
  }
}
