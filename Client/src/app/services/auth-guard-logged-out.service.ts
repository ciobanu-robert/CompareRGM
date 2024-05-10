import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoggedOutService {
  constructor(private router: Router) {}
  
  canActivate() {
    if (localStorage.length === 1) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
