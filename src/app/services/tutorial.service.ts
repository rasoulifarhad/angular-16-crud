import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { environment } from 'src/environments/environment';

// const baseUrl = 'http://localhost:8080/api/tutorials';
const BASE_URL = `{environment.baseUrl}/api/tutorials`; ;

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(BASE_URL);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${BASE_URL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(BASE_URL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${BASE_URL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${BASE_URL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(BASE_URL);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${BASE_URL}?title=${title}`);
  }
}
