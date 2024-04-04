import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [
      MenuBarModule,
  ],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.css'
})
export class StatisticsPageComponent implements OnInit{
  public prices: any;
  public competitors: any;
  public products: any;
  public totalPrice: any;
  public compIncrease: any;
  public productsIncrease: any;

  pricesData = {
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
  };

  competitorsData = {
    labels: ['2020' , '2021', '2022', '2023', '2024'],

    datasets: [
      {
        label: "Competitors",
        data: ['1', '23', '53', '65', '86'],
        backgroundColor: 'rgb(156, 20, 24)',
        borderColor: 'rgb(156, 20, 24)',
      }
    ]
  };

  productsData = {
    labels: ['2020' , '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: "Products",
        data: ['22', '43', '65', '75', '80'],
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

  createChartPrices() {
    this.prices = new Chart('prices', {
      type: 'line',
      data: this.pricesData,
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

  ngOnInit(): void {
      this.createChartPrices();
      this.createChartCompetitors();
      this.createChartProducts();
      this.createChartTotalPrice();
      this.createChartCompIncrease();
      this.createChartProductsIncrease();
  }
}
