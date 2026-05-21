import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class VisitService {
  constructor(private http: HttpClient) {}

  notify() {
    return this.http
      .get(`${environment.apiUrl}contact/visit`)
      .pipe(catchError(() => of(null)));
  }
}
