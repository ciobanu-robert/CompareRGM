import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { CommonModule } from '@angular/common';
import { ICompetitor } from '../../interfaces/competitor.interface';
import { AlertComponent } from '../../shared/alert/alert.component';



@Component({
  selector: 'app-competitors-page',
  standalone: true,
  imports: [
    MenuBarModule,
    CommonModule,
    AlertComponent,
  ],
  templateUrl: './competitors-page.component.html',
  styleUrl: './competitors-page.component.css'
})
export class CompetitorsPageComponent implements OnInit{
  competitors: ICompetitor[] = []
  competitor: ICompetitor = {};
  selected = false;

  showAlert = false;
  alertMsg = 'Sending your invitation...';
  alertColor = 'blue';

  onSelect(competitor: ICompetitor) {
    this.competitor = competitor;
    this.selected = true;
    this.showAlert = false;
  }

  async sendInvite() {
    this.showAlert = true;
    this.alertMsg = 'Sending your invitation...';
    this.alertColor = 'blue';

    const result = await fetch('/api/invite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        competitor: this.competitor._id,
        token: localStorage.getItem('token'),
      })
    }).then((res) => res.json());

    if (result.status === 'ok') {
      this.showAlert = true;
      this.alertMsg = `Invitation sent to ${this.competitor.company}`;
      this.alertColor = 'green';
    } else {
      this.showAlert = true;
      this.alertMsg = result.error;
      this.alertColor = 'red';
    }
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
