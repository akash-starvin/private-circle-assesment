import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private MOCK_DATA_URL: string = '../../assets/mock-data/table-data.json';

  detailsList = new BehaviorSubject('');
  currentData = this.detailsList.asObservable();

  private searchText = new BehaviorSubject('');
  currentSearchText = this.searchText.asObservable();

  constructor(private http: HttpClient) {}

  setDetailsList(list: any) {
    this.detailsList.next(list);
  }

  setSearchText(text: string) {
    this.searchText.next(text);
  }

  getMockDataFromJSON(): Observable<any> {
    return this.http.get(this.MOCK_DATA_URL);
  }
}
