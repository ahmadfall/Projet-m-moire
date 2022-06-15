import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Config } from './register';
import { Login } from './login';
import { Reservation } from './reservation';
import { serviceUpdate } from './update-service';
import { PostTestimonial } from './post-testimonial';
 
@Injectable({
  providedIn: 'root'
})
 
export class CrudService {
 
  // Node/Express API
  REGISTER_API: string = 'http://localhost:4000/auth';
  LOGIN_API: string = 'http://localhost:4000/auth';
  RESERVATION_API: string = 'http://localhost:4000';
  SERVICE_API: string = 'http://localhost:4000/service';
  SERVICE_Get_API: string = 'http://localhost:4000/service/service';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private httpClient: HttpClient) { }
 
  // Add register
  AddUser(registerdata: Config): Observable<Config> {
    let API_REGISTER_URL = `${this.REGISTER_API}/register`;
    return this.httpClient.post<Config>(API_REGISTER_URL, registerdata)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Add user login
  userLogin(loginData: Login): Observable<Login> {
    let API_LOGIN_URL = `${this.LOGIN_API}/login`;
    return this.httpClient.post<Login>(API_LOGIN_URL, loginData)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Add register
  Testimonial(data: PostTestimonial): Observable<PostTestimonial> {
    let API_REGISTER_URL = `${this.REGISTER_API}/register`;
    return this.httpClient.post<PostTestimonial>(API_REGISTER_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
    // Add a service 
    serviceUpdate(data: serviceUpdate): Observable<serviceUpdate> {
      let SERVICE_API_URL = `${this.SERVICE_API}/service`;
      return this.httpClient.post<serviceUpdate>(SERVICE_API_URL, data)
        .pipe(
          catchError(this.handleError)
        )
    }
  
  // Add user reservation
  userReservation(reservationData: Reservation): Observable<Reservation> {
    let RESERVATION_API_URL = `${this.RESERVATION_API}/reservation`;
    return this.httpClient.post<Reservation>(RESERVATION_API_URL, reservationData)
      .pipe(
        catchError(this.handleError)
      )
  }
 

 
  // Get all objects
  getUsers(): Observable<Config[]> {
    return this.httpClient.get<Config[]>(`${this.REGISTER_API}/register`);
  }
 
  // Get single object
  getService(): Observable<serviceUpdate[]> {
    let API_Get_URL = `${this.SERVICE_API}/service`;
    return this.httpClient.get<serviceUpdate[]>(API_Get_URL, { headers: this.httpHeaders })
    .pipe(
      catchError(this.handleError)
      );
    
  }
 
  // Update
  updateUser(servicePut: serviceUpdate): Observable<serviceUpdate> {
    let API_REGISTER_URL = `${this.REGISTER_API}/update-book`;
    return this.httpClient.put<serviceUpdate>(API_REGISTER_URL, servicePut, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
 
  // Delete
  deleteUser(id:number): Observable<unknown> {
    let API_REGISTER_URL = `${this.REGISTER_API}/delete-book/${id}`;
    return this.httpClient.delete(API_REGISTER_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
 
 
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
 
}