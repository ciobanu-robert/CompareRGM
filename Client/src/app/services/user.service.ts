import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject({
    _id: '',
    profileImage: '',
    email: '',
    company: '',
    admin: false,
    banned: false,
    products: [],
  });

  getUser = this.user.asObservable();

  setUser(user: any) {
    this.user.next(user);
  }
}
