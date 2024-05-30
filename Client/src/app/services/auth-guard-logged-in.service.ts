import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoggedInService {
  constructor(private router: Router) {}
  
  token = `${localStorage.getItem('token')}`;

  user = JSON.parse(atob(
    this.token.substring(
      this.token.indexOf('.') + 1,
      this.token.lastIndexOf('.')
    )
  ));
  
  canActivate() {
    if (
      this.user 
      && this.user.admin === false
      &&  this.user.banned === false
    ) {
      return true;
    } else if (this.user.admin === true) {
      this.router.navigate(['/admin/users']);
      return false;
    } else {
      this.router.navigate(['PageNotFound']);
      return false;
    }
  }
}
