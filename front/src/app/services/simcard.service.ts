import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Simcard } from '../models/simcard.model';
import { environment } from '../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class SimcardService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.api;

  getAll(): Observable<Simcard[]> {
    return this.http.get<Simcard[]>(this.baseUrl);
  }

  get(id: any): Observable<Simcard> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
