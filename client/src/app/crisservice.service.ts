import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again later.');
  }

  getStates() {
    return this.http
      .get('https://gis-api.nsdcindia.co/getState')
      .pipe(catchError(this.handleError));
  }

  getdata(){
    return this.http.post('https://reqres.in/api/users', { name: 'gautam'})
    .pipe(catchError(this.handleError));
  }
}
