import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CompareService } from './compare.service';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CompareGuardService {
  constructor(
    private router: Router,
    private compare: CompareService,
  ) {
    this.compare.getYourProduct.subscribe(product => this.yourProduct = product);
    this.compare.getCompetitorProduct.subscribe(product => this.competitorProduct = product);
  }

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

  canActivate() {
    if (localStorage.length > 1) {
      if (this.yourProduct.name && this.competitorProduct.name) {
        return true;
      } else {
        this.router.navigate(['/compare']);
        return false;
      }
    } else {
      this.router.navigate(['/PageNotFound']);
      return false;
    }
  }
}
