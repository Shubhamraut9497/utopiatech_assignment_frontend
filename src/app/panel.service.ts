import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanelService {
  private apiUrl = 'https://uat.utopiatech.in:4520/panel/gettestlist?org_id=3';
  constructor(private http: HttpClient) {}
  getDataOfPanel(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
