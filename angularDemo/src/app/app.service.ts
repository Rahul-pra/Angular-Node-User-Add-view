import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private BASE_URL = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  saveUser(data: any) {
    return this.http.post(`${this.BASE_URL}/saveUser`, data, this.httpOptions).pipe(
      map(
        (response: any) => {
          return response;
        },
        (error: any) => {
          throw error;
        }
      )
    );
  }

  getUsers() {
    return this.http.get(`${this.BASE_URL}/getUsers`, this.httpOptions).pipe(
      map(
        (response: any) => {
          return response;
        },
        (error: any) => {
          throw error;
        }
      )
    );
  }
}
