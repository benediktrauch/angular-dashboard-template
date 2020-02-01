import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Starships } from '../models/starships';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getStarships(): Observable<Starships[]> {
    return this.http.get<Starships[]>('https://swapi.co/api/starships/');
  }
}

