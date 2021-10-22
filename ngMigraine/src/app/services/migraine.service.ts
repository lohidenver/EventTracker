import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Migraine } from '../models/migraine';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MigraineService {

  private baseUrl= 'http://localhost:8090/';
  private url = this.baseUrl + 'api/migraine';

  constructor(private http: HttpClient) { }

  index(): Observable<Migraine[]> {
    return this.http.get<Migraine[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('MigraineService.index(): Error retrieving Migraine list');
      })
    );
  }
}
