import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoggedInService {
  constructor(private router: Router) {}
  
  canActivate() {
    if (localStorage.length > 1) {
      return true;
    } else {
      this.router.navigate(['/PageNotFound']);
      return false;
    }
  }
}
