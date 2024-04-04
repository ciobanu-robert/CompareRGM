import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TopbarComponent,
    SideBarComponent,
  ],
  exports: [
    TopbarComponent,
    SideBarComponent,
  ]
})
export class MenuBarModule { }
