import { Component, OnInit } from '@angular/core';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CompareService } from '../../services/compare.service';
import { IProduct } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compare-products-page',
  standalone: true,
  imports: [
    MenuBarModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './compare-products-page.component.html',
  styleUrl: './compare-products-page.component.css'
})
export class CompareProductsPageComponent implements OnInit{
  constructor(private compare:CompareService) {}

  maxPrice = 0;
  maxSize = 0;
  maxQuantity = 0;

  yourProduct: IProduct = {
    productID: 0,
    name: '',
    category: '',
    price: 0,
    size: 0,
    quantity: 0,
  };

  competitorProduct: IProduct = {
    productID: 0,
    name: '',
    category: '',
    price: 0,
    size: 0,
    quantity: 0,
  };

  round(value: number) {
    return Math.round(value);
  }

  ngOnInit(): void {
    this.compare.getYourProduct.subscribe(product => this.yourProduct = product);
    this.compare.getCompetitorProduct.subscribe(product => this.competitorProduct = product);

    if (this.yourProduct.price >= this.competitorProduct.price) {
      this.maxPrice = Math.ceil(this.yourProduct.price / 10) * 10;
    } else {
      this.maxPrice = Math.ceil(this.competitorProduct.price / 10) * 10;
    }

    if ( this.yourProduct.size && this.competitorProduct.size) {
      if (this.yourProduct.size >= this.competitorProduct.size) {
        this.maxSize = Math.ceil(this.yourProduct.size / 10) * 10;
      } else {
        this.maxSize = Math.ceil(this.competitorProduct.size / 10) * 10;
      }
    }

    if ( this.yourProduct.quantity && this.competitorProduct.quantity) {
      if (this.yourProduct.quantity >= this.competitorProduct.quantity) {
        this.maxQuantity = Math.ceil(this.yourProduct.quantity / 10) * 10;
      } else {
        this.maxQuantity = Math.ceil(this.competitorProduct.quantity / 10) * 10;
      }
    }
  }
}
