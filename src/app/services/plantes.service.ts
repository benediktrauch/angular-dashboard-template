import { Injectable } from '@angular/core';
import { Plantes } from '../models/plantes';
import { Observable, pipe } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class PlantesService {

  constructor(private http: HttpClient) { }

  getPlantes(): Observable<Plantes[]> {
    return this.http.get<
      {
        'count': number,
        'next': string,
        'previous': string,
        'results': Array<Plantes>
      }>('https://swapi.co/api/planets/')
      .pipe(
        map(res => res.results)
      );
  }
}
