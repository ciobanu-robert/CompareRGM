import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { GetProfileInfoService } from '../../services/get-profile-info.service';

@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.css'
})
export class ProfileDropdownComponent {
  imageUrl = '';
  companyName = '';

  constructor(private router: Router, private getProfileInfo: GetProfileInfoService) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  async ngOnInit() {
    this.imageUrl = await this.getProfileInfo.image();
    this.companyName = await this.getProfileInfo.company();
  }
}
