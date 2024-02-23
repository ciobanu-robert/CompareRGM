import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { TopbarComponent } from '../menu-bar/topbar/topbar.component';
import { MenuBarModule } from '../menu-bar/menu-bar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageComponent,
    MenuBarModule,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class PagesModule { }
