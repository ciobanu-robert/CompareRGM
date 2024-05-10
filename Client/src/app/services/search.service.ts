import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchText = new BehaviorSubject('');

  getSearchText = this.searchText.asObservable();
  
  setSearchText(searchText: string) {
    this.searchText.next(searchText);
  }
}
