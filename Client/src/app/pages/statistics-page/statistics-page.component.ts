import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { Chart } from 'chart.js/auto';
import { StatisticsService } from '../../services/statistics.service';
import { IStatistics } from '../../interfaces/statistics.interface';
import { CommonModule } from '@angular/common';
import { PositivePipe } from '../../pipes/positive.pipe';
import { IDownlaodStatistics } from '../../interfaces/download-statistics.interface';
import { ExcelService } from '../../services/excel.service';

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
  constructor(
    private statistics: StatisticsService,
    private excel: ExcelService,
  ) {}

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
  comparisonsChangeColor: string[] = ['rgba(217, 217, 217, 0)'];

  competitorsStatistics: IStatistics[] = [];
  competitorsLABELS: string[] = [];
  competitorsDATA: string[] = [];
  competitorsChangeDATA: number[] = [];
  competitorsChangeColor: string[] = ['rgba(217, 217, 217, 0)'];
  
  productsStatistics: IStatistics[] = [];
  productsLABELS: string[] = [];
  productsDATA: string[] = [];
  productsChangeDATA: number[] = [];
  productsChangeColor: string[] = ['rgba(217, 217, 217, 0)'];

  downloadStatistics: IDownlaodStatistics[] = [{
    comparisons: [],
    competitors: [],
    products: [],
    years: [],
  }];
  years: string[] = [];
  finalData: any;

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

  setStatistics() {
    this.downloadStatistics[0].years = [...new Set(this.years)];

    for (let year of this.downloadStatistics[0].years) {
      let exists = false;

      for (let product of this.comparisonsStatistics) {
        if (Number(year) === product.year) {
          this.downloadStatistics[0].comparisons.push(`${product.number}`);
          exists = true;
        }
      }
      if (exists === false) {
        this.downloadStatistics[0].comparisons.push('-');
      }

      exists = false;

      for (let product of this.competitorsStatistics) {
        if (Number(year) === product.year) {
          this.downloadStatistics[0].competitors.push(`${product.number}`);
          exists = true;
        }
      }
      if (exists === false) {
        this.downloadStatistics[0].competitors.push('-');
      }

      exists = false;

      for (let product of this.productsStatistics) {
        if (Number(year) === product.year) {
          this.downloadStatistics[0].products.push(`${product.number}`);
          exists = true;
        }
      }
      if (exists === false) {
        this.downloadStatistics[0].products.push('-');
      }
    }
  }

  convertData() {
    let elemCount;
    let finalData: any[] = [];
    for (const [key, value] of Object.entries(this.downloadStatistics[0])) {
      elemCount = value.length;

      for (let i = 0; i < elemCount; i++) {
        if (!finalData[i]) {
          finalData[i] = {
            comparisons: "",
            competitors: "",
            products: "",
            years: "",
          };
        }
        finalData[i][key] = value[i];
      }
    }
    return finalData;
  }

  download() {
    this.excel.exportAsExcelFile(this.finalData, "statistics");
  }

  async ngOnInit() {
    this.comparisonsStatistics = await this.statistics.getComparisons();
    this.comparisonsStatistics = this.comparisonsStatistics.reverse();
    let comparisonsLABELS = [];
    let comparisonsDATA = [];
    for (let statistics of this.comparisonsStatistics) {
      comparisonsLABELS.push(`${statistics.year}`);
      comparisonsDATA.push(`${statistics.number}`);
      this.years.push(`${statistics.year}`)
    }
    this.comparisonsLABELS.push(...comparisonsLABELS.slice(0, 5).reverse());
    this.comparisonsDATA.push(...comparisonsDATA.slice(0, 5).reverse());
    this.createChartComparisons();
    
    this.competitorsStatistics = await this.statistics.getCompetitors();
    this.competitorsStatistics = this.competitorsStatistics.reverse();
    let competitorsLABELS = [];
    let competitorsDATA = [];
    for (let statistics of this.competitorsStatistics) {
      competitorsLABELS.push(`${statistics.year}`);
      competitorsDATA.push(`${statistics.number}`);
      this.years.push(`${statistics.year}`)
    }
    this.competitorsLABELS.push(...competitorsLABELS.slice(0, 5).reverse());
    this.competitorsDATA.push(...competitorsDATA.slice(0, 5).reverse());
    this.createChartCompetitors();

    this.productsStatistics = await this.statistics.getProducts();
    this.productsStatistics = this.productsStatistics.reverse();
    let productsLABELS = [];
    let productsDATA = []
    for (let statistics of this.productsStatistics) {
      productsLABELS.push(`${statistics.year}`);
      productsDATA.push(`${statistics.number}`);
      this.years.push(`${statistics.year}`)
    }
    this.productsLABELS.push(...productsLABELS.slice(0, 5).reverse());
    this.productsDATA.push(...productsDATA.slice(0, 5).reverse());    
    this.createChartProducts();
    
    this.comparisonsChangeDATA.push(
      Math.round(
        (Number(this.comparisonsDATA[this.comparisonsDATA.length-1]) 
        - Number(this.comparisonsDATA[this.comparisonsDATA.length-2])) 
        / Number(this.comparisonsDATA[this.comparisonsDATA.length-2]) * 100
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
        (Number(this.competitorsDATA[this.competitorsDATA.length-1]) 
        - Number(this.competitorsDATA[this.competitorsDATA.length-2])) 
        / Number(this.competitorsDATA[this.competitorsDATA.length-2]) * 100
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

    this.setStatistics();
    this.finalData = this.convertData();
  }
}
