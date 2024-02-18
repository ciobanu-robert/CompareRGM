import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { TopbarComponent } from '../menu-bar/topbar/topbar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageComponent,
    TopbarComponent,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class PagesModule { }
