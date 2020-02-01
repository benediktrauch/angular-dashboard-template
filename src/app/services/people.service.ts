import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>('https://swapi.co/api/people/');
  }
}
