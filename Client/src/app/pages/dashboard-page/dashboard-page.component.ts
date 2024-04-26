import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { GetProfileInfoService } from '../../services/get-profile-info.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    MenuBarModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit{
  constructor(private getProfileInfo: GetProfileInfoService) {}

  prices: any;
  imageUrl = '';
  companyName= '';
  email = '';

  createChart() {
    this.prices = new Chart('prices', {
      type: 'line',

      data: {
        labels: ['2020' , '2021', '2022', '2023', '2024'],

        datasets: [
          {
            label: "product1",
            data: ['70', '32', '23', '34', '38'],
            backgroundColor: 'rgb(23, 165, 20)',
            borderColor: 'rgb(23, 165, 20)',
          },
          {
            label: "product2",
            data: ['43', '21', '54', '75', '80'],
            backgroundColor: 'rgb(20, 43, 165)',
            borderColor: 'rgb(20, 43, 165)',
          },
          {
            label: "product3",
            data: ['43', '54', '67', '56', '40'],
            backgroundColor: 'rgb(156, 20, 24)',
            borderColor: 'rgb(156, 20, 24)',
          },
        ]
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }
    });
  }

  async ngOnInit() {
      this.createChart();
      this.imageUrl = await this.getProfileInfo.image()
      this.companyName = await this.getProfileInfo.company();
      this.email = await this.getProfileInfo.email();
  }
}
