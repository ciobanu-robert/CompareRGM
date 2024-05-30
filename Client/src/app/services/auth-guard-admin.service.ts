import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService {
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
      && user.admin === true
    ) {
      return true;
    } else if (user.admin === false) {
      this.router.navigate(['PageNotFound']);
      return false;
    } else {
      this.router.navigate(['PageNotFound']);
      return false;
    }
  }
}
