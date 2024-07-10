import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoggedInService {
  constructor(private router: Router) {}
  
  canActivate() {
    const token = `${localStorage.getItem('token')}`;

    const user = JSON.parse(atob(
      token.substring(
        token.indexOf('.') + 1,
        token.lastIndexOf('.')
      )
    ));

    if (
      user 
      && user.admin === false
      &&  user.banned === false
    ) {
      return true;
    } else if (user.admin === true) {
      this.router.navigate(['/admin/users']);
      return false;
    } else {
      localStorage.removeItem('token');
      return false;
    }
  }
}
