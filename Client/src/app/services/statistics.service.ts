import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  async postProducts(products: number) {
    const result = await fetch('/api/statistics/post-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
        productsNumber: products,
      })
    }).then((res) => res.json());
  }

  async getProducts() {
    const result = await fetch('/api/statistics/get-products', {
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

  async getCompetitors() {
    const result = await fetch('/api/statistics/get-competitors', {
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
