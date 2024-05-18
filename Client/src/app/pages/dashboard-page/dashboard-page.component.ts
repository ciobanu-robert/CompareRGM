import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { GetProfileInfoService } from '../../services/get-profile-info.service';
import { GetCompetitorsService } from '../../services/get-competitors.service';
import { CommonModule } from '@angular/common';
import { INotification } from '../../interfaces/notification.interface';
import { ProductsService } from '../../services/products.service';
import { StatisticsService } from '../../services/statistics.service';
import { IStatistics } from '../../interfaces/statistics.interface';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    MenuBarModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit{
  constructor(
    private getProfileInfo: GetProfileInfoService, 
    private getCompetitors: GetCompetitorsService,
    private productsService: ProductsService,
    private statistics: StatisticsService,
  ) {}

  imageUrl = '';
  companyName= '';
  email = '';
  topCompetitors: INotification[] = [];
  countCompetitors = 0;
  countProducts = 0;
  productPrices = 0;
  
  comparisons: any;
  comparisonsStatistics: IStatistics[] = [];
  comparisonsLABELS: string[] = [];
  comparisonsDATA: string[] = [];

  createChartComparisons() {
    this.comparisons = new Chart('comparisons', {
      type: 'line',

      data: {
        labels: this.comparisonsLABELS,

        datasets: [
          {
            label: "Competitors",
            data: this.comparisonsDATA,
            backgroundColor: 'rgb(23, 165, 20)',
            borderColor: 'rgb(23, 165, 20)',
          }
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
      this.imageUrl = await this.getProfileInfo.image()
      this.companyName = await this.getProfileInfo.company();
      this.email = await this.getProfileInfo.email();
      this.topCompetitors = await this.getCompetitors.top();
      this.comparisonsStatistics = await this.statistics.getComparisons();
      this.comparisonsStatistics = this.comparisonsStatistics.reverse();
      for (let products of this.comparisonsStatistics) {
        this.comparisonsLABELS.push(`${products.year}`);
        this.comparisonsDATA.push(`${products.number}`);
      }
      this.comparisonsLABELS = this.comparisonsLABELS.slice(0, 5);
      this.comparisonsDATA = this.comparisonsDATA.slice(0, 5);
      this.createChartComparisons();
      this.countProducts = await this.productsService.countProducts();
      this.countCompetitors = await this.getCompetitors.number();
      this.productPrices = await this.productsService.productsPrices();
  }
}
