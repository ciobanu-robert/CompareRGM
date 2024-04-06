import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuBarModule } from '../menu-bar/menu-bar.module';
import { AlertComponent } from '../shared/alert/alert.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageComponent,
    MenuBarModule,
    AlertComponent,
  ],
  exports: [
    HomePageComponent,
    AlertComponent,
  ]
})
export class PagesModule { }
