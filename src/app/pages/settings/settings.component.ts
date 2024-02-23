import { Component } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MenuBarModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

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
}
