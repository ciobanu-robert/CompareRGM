import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-page',
  standalone: true,
  imports: [
    MenuBarModule,
    CommonModule,
  ],
  templateUrl: './terms-page.component.html',
  styleUrl: './terms-page.component.css'
})
export class TermsPageComponent implements OnInit{
  localStorageLenght = localStorage.length;
  disabled = true;

  ngOnInit() {
    if (this.localStorageLenght > 1) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
}
