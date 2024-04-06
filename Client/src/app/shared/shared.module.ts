import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputComponent,
    AlertComponent,
  ],
  exports: [
    InputComponent,
    AlertComponent,
  ],
})
export class SharedModule { }
