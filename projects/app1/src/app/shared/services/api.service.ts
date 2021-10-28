import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endpoint: string = 'http://127.0.0.1:3000/user';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add User
  AddUser(data: User): Observable<any> {
    let API_URL = `${this.endpoint}/insert`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all Users
  GetUsers() {
    return this.http.get(`${this.endpoint}/get`);
  }

  // Get user
  GetUser(id: string): Observable<any> {
    let API_URL = `${this.endpoint}/get/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  // Update student
  UpdateUser(id: string, data: any): Observable<any> {
    let API_URL = `${this.endpoint}/update/`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete student
  DeleteUser(id: string): Observable<any> {
    var API_URL = `${this.endpoint}/delete/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}