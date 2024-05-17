import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { Chart } from 'chart.js/auto';
import { StatisticsService } from '../../services/statistics.service';
import { IStatistics } from '../../interfaces/statistics.interface';
import { CommonModule } from '@angular/common';
import { PositivePipe } from '../../pipes/positive.pipe';

@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [
      MenuBarModule,
      CommonModule,
      PositivePipe,
  ],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.css'
})
export class StatisticsPageComponent implements OnInit{
  constructor(private statistics: StatisticsService) {}

  public comparisons: any;
  public competitors: any;
  public products: any;
  public comparisonsChange: any;
  public compChange: any;
  public productsChange: any;

  comparisonsStatistics: IStatistics[] = [];
  comparisonsLABELS: string[] = [];
  comparisonsDATA: string[] = [];
  comparisonsChangeDATA: number[] = [];
  comparisonsChangeColor: string[] = ['rgba(217, 217, 217, 0)']

  competitorsStatistics: IStatistics[] = [];
  competitorsLABELS: string[] = [];
  competitorsDATA: string[] = [];
  competitorsChangeDATA: number[] = [];
  competitorsChangeColor: string[] = ['rgba(217, 217, 217, 0)']
  
  productsStatistics: IStatistics[] = [];
  productsLABELS: string[] = [];
  productsDATA: string[] = [];
  productsChangeDATA: number[] = [];
  productsChangeColor: string[] = ['rgba(217, 217, 217, 0)']

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

  comparisonsChangeData = {
    datasets: [
      {
        data: this.comparisonsChangeDATA,
        backgroundColor: this.comparisonsChangeColor,
        borderColor: 'rgba(217, 217, 217, 0)',
        cutout: '70%'
      },
    ]
  };

  compChangeData = {
    datasets: [
      {
        data: this.competitorsChangeDATA,
        backgroundColor: this.competitorsChangeColor,
        borderColor: 'rgba(217, 217, 217, 0)',
        cutout: '70%'
      },
    ]
  };

  productsChangeData = {
    datasets: [
      {
        data: this.productsChangeDATA,
        backgroundColor: this.productsChangeColor,
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

  createChartComparisonsChange() {
    this.comparisonsChange = new Chart('comparisonsChange', {
      type: 'doughnut',
      data: this.comparisonsChangeData,
      options: this.optionsDoughnut,
    });
  }

  createChartCompChange() {
    this.compChange = new Chart('compChange', {
      type: 'doughnut',
      data: this.compChangeData,
      options: this.optionsDoughnut,
    });
  }

  createChartProductsChange() {
    this.productsChange = new Chart('productsChange', {
      type: 'doughnut',
      data: this.productsChangeData,
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
    
    this.comparisonsChangeDATA.push(
      Math.round(
        (Number(this.comparisonsDATA[0]) 
        - Number(this.comparisonsDATA[1])) 
        / Number(this.comparisonsDATA[1]) * 100
      )
    ); 
    this.comparisonsChangeDATA.push(100 - this.comparisonsChangeDATA[0]);
    if (this.comparisonsChangeDATA[0] > 0) {
      this.comparisonsChangeColor.unshift('rgb(23, 165, 20)'); 
    } else {
      this.comparisonsChangeColor.unshift('rgb(156, 20, 24)');
    }
    this.createChartComparisonsChange();

    this.competitorsChangeDATA.push(
      Math.round(
        (Number(this.competitorsDATA[0]) 
        - Number(this.competitorsDATA[1])) 
        / Number(this.competitorsDATA[1]) * 100
      )
    ); 
    this.competitorsChangeDATA.push(100 - this.competitorsChangeDATA[0]);
    if (this.competitorsChangeDATA[0] > 0) {
      this.competitorsChangeColor.unshift('rgb(23, 165, 20)'); 
    } else {
      this.competitorsChangeColor.unshift('rgb(156, 20, 24)');
    }
    this.createChartCompChange();

    this.productsChangeDATA.push(
      Math.round(
        (Number(this.productsDATA[0]) 
        - Number(this.productsDATA[1])) 
        / Number(this.productsDATA[1]) * 100
      )
    ); 
    this.productsChangeDATA.push(100 - this.productsChangeDATA[0]);
    if (this.competitorsChangeDATA[0] > 0) {
      this.productsChangeColor.unshift('rgb(23, 165, 20)'); 
    } else {
      this.productsChangeColor.unshift('rgb(156, 20, 24)');
    }
    this.createChartProductsChange();
  }
}
