import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { ICompetitor } from '../../interfaces/competitor.interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetCompetitorsService } from '../../services/get-competitors.service';

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
  ) {}
  competitors: ICompetitor[] = [];
  competitor: ICompetitor = {
    company: '',
    products: [],
  };
  competitorPorduct: IProduct = {
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
  yourPorduct: IProduct = {
    productID: 0,
    name: '',
    category: '',
    price: 0,
    size: 0,
    quantity: 0,
  };

  selectYourProduct(product: IProduct) {
    this.yourPorduct = product;
  }

  selectCompetitorProduct(product: IProduct) {
    this.competitorPorduct = product;
  }

  selectCompetitor(selectCompetitor: any) {
    this.competitor = selectCompetitor;
  }

  async ngOnInit() {
    this.yourProducts = await this.productsService.getProducts();
    this.competitors = await this.getCompetitors.data();
  }
}
