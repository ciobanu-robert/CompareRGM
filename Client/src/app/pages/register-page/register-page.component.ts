import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    JsonPipe,
    CommonModule,
    SharedModule,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  company = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirmPassword = new FormControl('', [
    Validators.required,
  ]);
  terms = new FormControl(false, [
    Validators.requiredTrue,
  ]);

  passwordTipe = 'password';
  confirmPasswordTipe = 'password';
  showAlert = false;
  alertMsg = 'Please wait! Your account is being created.';
  alertColor = 'blue'

  registerForm = new FormGroup({
    email: this.email,
    company: this.company,
    password: this.password,
    confirmPassword: this.confirmPassword,
    terms: this.terms,
  });

  visiblePassword() {
    if (this.passwordTipe === 'password')
      this.passwordTipe = 'text';
    else
      this.passwordTipe = 'password';
  }
  visibleConfirmPassword() {
    if (this.confirmPasswordTipe === 'password')
      this.confirmPasswordTipe = 'text';
    else
      this.confirmPasswordTipe = 'password';
  }

  async register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created.';
    this.alertColor = 'blue';

    const email = this.email.value;
    const company = this.company.value;
    const password = this.password.value;

    const result = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        company,
        password,
      })

    }).then((res) => res.json());
    
    if (result.status === 'ok') {
      this.showAlert = true;
      this.alertMsg = 'Your account has been created successfully!';
      this.alertColor = 'green';
    } else {
      this.showAlert = true;
      this.alertMsg = result.error;
      this.alertColor = 'red';
    }

    console.log(HttpErrorResponse);
  }
}
