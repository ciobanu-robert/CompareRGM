import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProfileInfoService {
  async image() {
    const result = await fetch('/api/profile-info/image', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
      })
    }).then((res) => res.json());
    return result.data;
  }
}
