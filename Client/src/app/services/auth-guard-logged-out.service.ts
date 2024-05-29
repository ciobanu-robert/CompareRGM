import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoggedOutService {
  constructor(private router: Router) {}

  token = `${localStorage.getItem('token')}`;

  user = JSON.parse(atob(
    this.token.substring(
      this.token.indexOf('.') + 1,
      this.token.lastIndexOf('.')
    )
  ));
  
  canActivate() {
    if (localStorage.length === 1) {
      return true;
    } else if (this.user.admin === false) {
      this.router.navigate(['/dashboard']);
      return false;
    } else {
      this.router.navigate(['/admin/users']);
      return false;
    }
  }
}
