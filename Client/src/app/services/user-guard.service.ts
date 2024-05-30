import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService {
  constructor(
    private router: Router,
    private userService: UserService,
  ) {
    this.userService.getUser.subscribe(user => this.user = user);
  }

  user: IUser = {
    _id: '',
    profileImage: '',
    email: '',
    company: '',
    admin: false,
    banned: false,
    products: [],
  };

  canActivate() {
   const token = `${localStorage.getItem('token')}` || '';

    const logged = JSON.parse(atob(
      token.substring(
        token.indexOf('.') + 1,
        token.lastIndexOf('.')
      )
    ));
  

    if (logged && logged.admin === true) {
      if (this.user._id != '') {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    } else {
      this.router.navigate(['/PageNotFound']);
      return false;
    }
  }
}
