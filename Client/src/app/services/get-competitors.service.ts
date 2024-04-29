import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCompetitorsService {
  async list() {
    const result = await fetch('/api/competitors/competitors-list', {
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

  async top() {
    const result = await fetch('/api/competitors/top-competitors', {
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

  async number() {
    const result = await fetch('/api/competitors/competitors-number', {
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
