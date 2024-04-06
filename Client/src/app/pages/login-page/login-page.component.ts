import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  passwordTipe = 'password';

  credentials = {
    email: '',
    password: '',
  }

  visiblePassword() {
    if (this.passwordTipe === 'password')
      this.passwordTipe = 'text';
    else
      this.passwordTipe = 'password';
  }

  login() {
    console.log(this.credentials)
  }
}
