import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { CommonModule } from '@angular/common';
import { ICompetitor } from '../../interfaces/competitor.interface';



@Component({
  selector: 'app-competitors-page',
  standalone: true,
  imports: [
    MenuBarModule,
    CommonModule,
  ],
  templateUrl: './competitors-page.component.html',
  styleUrl: './competitors-page.component.css'
})
export class CompetitorsPageComponent implements OnInit{
  competitors: ICompetitor[] = []
  competitor: ICompetitor = {};
  selected = false;

  onSelect(competitor: ICompetitor) {
    this.competitor = competitor;
    this.selected = true;
  }
  
  async ngOnInit() {
    const result = await fetch('/api/competitors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
      })
    }).then((res) => res.json());
    this.competitors = result.data;
  }
}
