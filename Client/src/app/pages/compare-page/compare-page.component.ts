import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { ICompetitor } from '../../interfaces/competitor.interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetCompetitorsService } from '../../services/get-competitors.service';
import { CompareService } from '../../services/compare.service';

@Component({
  selector: 'app-compare-page',
  standalone: true,
  imports: [
    MenuBarModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './compare-page.component.html',
  styleUrl: './compare-page.component.css'
})
export class ComparePageComponent implements OnInit{
  constructor(
    private productsService: ProductsService,
    private getCompetitors: GetCompetitorsService,
    private compare: CompareService,
  ) {
    this.compare.getYourProduct.subscribe(product => this.yourProduct = product);
  }
  competitors: ICompetitor[] = [];
  competitor: ICompetitor = {
    company: '',
    products: [],
  };
  competitorProduct: IProduct = {
    productID: 0,
    name: '',
    category: '',
    price: 0,
    size: 0,
    quantity: 0,
  };
  selectedCompetitor = new FormGroup({
    competitor : new FormControl(this.competitors),
  });

  yourProducts: IProduct[] = [];
  yourProduct: IProduct = {
    productID: 0,
    name: '',
    category: '',
    price: 0,
    size: 0,
    quantity: 0,
  };

  selectYourProduct(product: IProduct) {
    this.yourProduct = product;
  }

  selectCompetitorProduct(product: IProduct) {
    this.competitorProduct = product;
  }

  selectCompetitor(selectCompetitor: any) {
    this.competitor = selectCompetitor;
  }

  compareProducts() {
    this.compare.setProducts(this.yourProduct, this.competitorProduct);
  }

  async ngOnInit() {
    this.yourProducts = await this.productsService.getProducts();
    this.competitors = await this.getCompetitors.data();
  }
}
