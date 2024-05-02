import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  async save(products: IProduct[]) {
    const result = await fetch('/api/products/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
        products: products
      })
    }).then((res) => res.json());
  }

  async getProducts() {
    const result = await fetch('/api/products/get-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
      })
    }).then((res) => res.json());
    return result.data;
  }

  async countProducts() {
    const result = await fetch('/api/products/count-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
      })
    }).then((res) => res.json());
    return result.data;
  }

  async productsPrices() {
    const result = await fetch('/api/products/products-prices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
      })
    }).then((res) => res.json());
    return result.data;
  }
}
