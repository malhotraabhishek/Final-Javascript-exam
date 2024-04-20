import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'https://httpbin.org'; // Base URL for httpbin

  constructor(private http: HttpClient) { }

  // GET request
  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get`);
  }

  // POST request
  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/post`, data);
  }

  // PUT request
  putData(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/put`, data);
  }

  // DELETE request
  deleteData(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete`);
  }
}


