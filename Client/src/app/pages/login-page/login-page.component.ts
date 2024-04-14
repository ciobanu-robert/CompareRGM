import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, Router} from '@angular/router';
import { AlertComponent } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AlertComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  passwordTipe = 'password';

  credentials = {
    email: '',
    password: '',
  };

  showAlert = false;
  alertMsg = 'Please wait! You are loggin in.';
  alertColor = 'blue';

  constructor (private router: Router) {}

  visiblePassword() {
    if (this.passwordTipe === 'password')
      this.passwordTipe = 'text';
    else
      this.passwordTipe = 'password';
  }

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! You are loggin in.';
    this.alertColor = 'blue';

    const email = this.credentials.email;
    const password = this.credentials.password;

    const result = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      })
    }).then((res) => res.json());

    if (result.data) {
      this.showAlert = true;
      this.alertMsg = 'Login successful.';
      this.alertColor = 'green';
      localStorage.setItem('token', result.data);
      this.router.navigate(['/dashboard']);
    } else {
      this.showAlert = true;
      this.alertMsg = result.error;
      this.alertColor = 'red';
    }
  }
}
