import { Component } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {  FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { CommonModule } from '@angular/common';
import { matchValidator } from '../../validators/match-validator';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MenuBarModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    InputComponent,
    CommonModule,
    RxReactiveFormsModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})

export class SettingsComponent {
  
  passwordTipe = 'password';
  confirmPasswordTipe = 'password';

  newImage = new FormControl(null, [
    RxwebValidators.image({
        maxHeight: 100,  
        maxWidth: 100, 
        minHeight: 100, 
        minWidth: 100 ,
      }),
  ]);
  newCompany = new FormControl('',[
    Validators.minLength(3),
  ]);
  newDescription = new FormControl('' , [
    Validators.maxLength(271),
  ]);
  newPassword = new FormControl('', [
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
    matchValidator('confirmNewPassword', true),
  ]);
  confirmNewPassword = new FormControl('', [
    matchValidator('newPassword')
  ]);

  settingsForm = new FormGroup({
    newImage: this.newImage,
    newCompany: this.newCompany,
    newDescription: this.newDescription,
    newPassword: this.newPassword,
    confirmNewPassword: this.confirmNewPassword,
  });

  limitTextArea(e: KeyboardEvent) {
    let textarea = e.target as any;
    let maxRows: number = textarea.rows;
    let maxColumns: number = textarea.cols;

    let newContent: string = (textarea.value as string)
      .split('\n')
      .filter((val, row) => row < maxRows)
      .map(val => val.slice(0, maxColumns))
      .join('\n');

    textarea.value = newContent;
  }

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


  save() {

  }
}
