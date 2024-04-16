import { Component } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {  FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatchValidatorService } from '../../services/match-validator.service';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MenuBarModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    InputComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  constructor(private matchValidator: MatchValidatorService) {}
  newPasswordTipe = 'password';
  confirmNewPasswordTipe = 'password';

  newImage = new FormControl('');
  newCompany = new FormControl('',[
    Validators.minLength(3),
  ]);
  newDescription = new FormControl('' , [
    Validators.maxLength(271),
  ]);
  newPassword = new FormControl('', [
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
    this.matchValidator.match('confirmNewPassword', true),
  ]);
  confirmNewPassword = new FormControl('', [
    this.matchValidator.match('newPassword')
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

  save() {

  }
}
