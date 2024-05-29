import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService {
  constructor(private router: Router) {}
  
  token = `${localStorage.getItem('token')}`;

  user = JSON.parse(atob(
    this.token.substring(
      this.token.indexOf('.') + 1,
      this.token.lastIndexOf('.')
    )
  ));
  
  canActivate() {
    if (this.user && this.user.admin === true) {
      return true;
    } else {
      this.router.navigate(['/PageNotFound']);
      return false;
    }
  }
}
