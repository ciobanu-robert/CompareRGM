import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
  private yourProduct = new BehaviorSubject({
    productID: 0,
    name: '',
    category: '',
    price: 0,
    size: 0,
    quantity: 0,
  });

  private competitorProduct = new BehaviorSubject({
    productID: 0,
    name: '',
    category: '',
    price: 0,
    size: 0,
    quantity: 0,
  });


  getYourProduct = this.yourProduct.asObservable();
  getCompetitorProduct = this.competitorProduct.asObservable();


  setProducts(yourProduct: any, competitorProduct: any) {
    this.yourProduct.next(yourProduct);
    this.competitorProduct.next(competitorProduct);
  }
}
