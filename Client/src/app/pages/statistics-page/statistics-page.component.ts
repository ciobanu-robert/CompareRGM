import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { Chart } from 'chart.js/auto';
import { StatisticsService } from '../../services/statistics.service';
import { IStatistics } from '../../interfaces/statistics.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [
      MenuBarModule,
      CommonModule
  ],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.css'
})
export class StatisticsPageComponent implements OnInit{
  constructor(private statistics: StatisticsService) {}

  public comparisons: any;
  public competitors: any;
  public products: any;
  public totalPrice: any;
  public compIncrease: any;
  public productsIncrease: any;

  comparisonsStatistics: IStatistics[] = [];
  comparisonsLABELS: string[] = [];
  comparisonsDATA: string[] = [];

  competitorsStatistics: IStatistics[] = [];
  competitorsLABELS: string[] = [];
  competitorsDATA: string[] = [];
  
  productsStatistics: IStatistics[] = [];
  productsLABELS: string[] = [];
  productsDATA: string[] = [];

  comparisonsData = {
    labels: this.comparisonsLABELS,

    datasets: [
      {
        label: "Competitors",
        data: this.comparisonsDATA,
        backgroundColor: 'rgb(23, 165, 20)',
        borderColor: 'rgb(23, 165, 20)',
      }
    ]
  };

  competitorsData = {
    labels: this.competitorsLABELS,

    datasets: [
      {
        label: "Competitors",
        data: this.competitorsDATA,
        backgroundColor: 'rgb(156, 20, 24)',
        borderColor: 'rgb(156, 20, 24)',
      }
    ]
  };

  productsData = {
    labels: this.productsLABELS,
    datasets: [
      {
        label: "Products",
        data: this.productsDATA,
        backgroundColor: 'rgb(20, 43, 165)',
        borderColor: 'rgb(20, 43, 165)',
      },
    ]
  };

  totalPriceData = {
    datasets: [
      {
        data: [33, 67],
        backgroundColor: [
          'rgb(23, 165, 20)',
          'rgba(217, 217, 217, 0)'
        ],
        borderColor: 'rgba(217, 217, 217, 0)',
        cutout: '70%'
      },
    ]
  };

  compIncreaseData = {
    datasets: [
      {
        data: [59, 41],
        backgroundColor: [
          'rgb(23, 165, 20)',
          'rgba(217, 217, 217, 0)'
        ],
        borderColor: 'rgba(217, 217, 217, 0)',
        cutout: '70%'
      },
    ]
  };

  productsIncreaseData = {
    datasets: [
      {
        data: [10, 90],
        backgroundColor: [
          'rgb(23, 165, 20)',
          'rgba(217, 217, 217, 0)'
        ],
        borderColor: 'rgba(217, 217, 217, 0)',
        cutout: '70%'
      },
    ]
  };

  optionsLine = {
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
  };

  optionsDoughnut = {
    plugins: {
      tooltip: {
        enabled: false
      }
    }
  }

  createChartComparisons() {
    this.comparisons = new Chart('comparisons', {
      type: 'line',
      data: this.comparisonsData,
      options: this.optionsLine,
    });
  }

  createChartCompetitors() {
    this.competitors = new Chart('competitors', {
      type: 'line',
      data: this.competitorsData,
      options: this.optionsLine,
    });
  }

  createChartProducts() {
    this.products = new Chart('products', {
      type: 'line',
      data: this.productsData,
      options: this.optionsLine,
    });
  }

  createChartTotalPrice() {
    this.totalPrice = new Chart('totalPrice', {
      type: 'doughnut',
      data: this.totalPriceData,
      options: this.optionsDoughnut,
    });
  }

  createChartCompIncrease() {
    this.compIncrease = new Chart('compIncrease', {
      type: 'doughnut',
      data: this.compIncreaseData,
      options: this.optionsDoughnut,
    });
  }

  createChartProductsIncrease() {
    this.productsIncrease = new Chart('productsIncrease', {
      type: 'doughnut',
      data: this.productsIncreaseData,
      options: this.optionsDoughnut,
    });
  }

  async ngOnInit() {
    this.comparisonsStatistics = await this.statistics.getComparisons();
    this.comparisonsStatistics = this.comparisonsStatistics.reverse();
    for (let products of this.comparisonsStatistics) {
      this.comparisonsLABELS.push(`${products.year}`);
      this.comparisonsDATA.push(`${products.number}`);
    }
    this.comparisonsLABELS = this.comparisonsLABELS.slice(0, 5);
    this.comparisonsDATA = this.comparisonsDATA.slice(0, 5);
    this.createChartComparisons();
    
    this.competitorsStatistics = await this.statistics.getCompetitors();
    this.competitorsStatistics = this.competitorsStatistics.reverse();
    for (let products of this.competitorsStatistics) {
      this.competitorsLABELS.push(`${products.year}`);
      this.competitorsDATA.push(`${products.number}`);
    }
    this.competitorsLABELS = this.competitorsLABELS.slice(0, 5);
    this.competitorsDATA = this.competitorsDATA.slice(0, 5);
    this.createChartCompetitors();

    this.productsStatistics = await this.statistics.getProducts();
    this.productsStatistics = this.productsStatistics.reverse();
    for (let products of this.productsStatistics) {
      this.productsLABELS.push(`${products.year}`);
      this.productsDATA.push(`${products.number}`);
    }
    this.productsLABELS = this.productsLABELS.slice(0, 5);
    this.productsDATA = this.productsDATA.slice(0, 5);
    this.createChartProducts();
    
    this.createChartTotalPrice();
    this.createChartCompIncrease();
    this.createChartProductsIncrease();
  }
}
