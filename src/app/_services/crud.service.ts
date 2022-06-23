import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Config } from './register';
import { Login } from './login';
import { Reservation } from './reservation';
import { postService } from './add-service';
import { PostTestimonial } from './post-testimonial';
import { UpdatPassword } from './update-password';
import { Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // Node/Express API
  AUTH_API: string = 'http://localhost:4000/auth';
  API: string = 'http://localhost:4000';
  // Http Header

  constructor(private httpClient: HttpClient, private router: Router) { }

  //  Register User
  /*
  AddUser(registerdata: Config): Observable<any> {
    let API_REGISTER_URL = `${this.AUTH_API}/register`;
    return this.httpClient.post(API_REGISTER_URL, registerdata)
      .pipe(
        catchError(this.handleError)
      )
  }*/
  AddUser(registerdata: Config): Observable<any> {
    return this.httpClient.post(this.AUTH_API + '/register', registerdata, httpOptions)

  }
  //  User login
  userLogin(loginData: Login) {
    let API_LOGIN_URL = `${this.AUTH_API}/authentication`;
    return this.httpClient.post(API_LOGIN_URL, loginData, httpOptions).subscribe({
      next: (response) => {
        localStorage.setItem("session", JSON.stringify(response))
        this.router.navigate([''])
      }
    })

  }
  // rservation
  /*
  reservaton(reservationData: Reservation): Observable<any> {
    let API_LOGIN_URL = `${this.API}/reservation`;
    return this.httpClient.post(API_LOGIN_URL, reservationData)
      .pipe(
        catchError(this.handleError)
      )
  }
  */
 /*
  reservaton(reservationData: Reservation): Observable<any> {
    return this.httpClient.post(this.API + 'reservation/reservation', reservationData, httpOptions)
    

  }*/
  userReservation(reservationData: Reservation) {
    let RESERVATION_API_URL = `${this.API}/reservation/reservation`;
    return this.httpClient.post(RESERVATION_API_URL, reservationData)
    .subscribe({
      next: (response) => {
       // localStorage.setItem("session", JSON.stringify(response))
        //
      //let obj =  JSON.parse(response)
        console.log(response)
        console.log(typeof(response))
        window.open(response.toString())
      }
    })

      
  }



  // post services 
  /*
    postServices(data: postService): Observable<any> {
      let SERVICE_API_URL = `${this.API}/service/service`
      return this.httpClient.post(SERVICE_API_URL, data)
        .pipe(
          catchError(this.handleError)
        )
    }*/
    /*
  postServices(postData: Reservation): Observable<any> {
    return this.httpClient.post(this.API + 'service/service', postData,)

  }*/
  addServices(registerdata: postService): Observable<any> {
    return this.httpClient.post(this.API + '/service/service', registerdata, httpOptions)

  }

  // get services

  getAllData(): Observable<any> {

    return this.httpClient.get(`${this.API}/service/service`)
      .pipe(
        catchError(this.handleError)
      )
  }
  // get commande
  getCommand(): Observable<any> {

    return this.httpClient.get(`${this.API}/mescommande`)
      .pipe(
        catchError(this.handleError)
      )
  }

  // get profile
  getProfile(): Observable<any> {

    return this.httpClient.get(`${this.API}/monprofil`)
      .pipe(
        catchError(this.handleError)
      )
  }


  // Post testimonial
  /*
  Testimonial(data: PostTestimonial): Observable<PostTestimonial> {
    let API_RESTIMONIAL_URL = `${this.API}/testimonial`;
    return this.httpClient.post<PostTestimonial>(API_RESTIMONIAL_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  */
  Testimonial(tesimonialData: Reservation): Observable<any> {
    return this.httpClient.post(this.API + '/profil/temoignage', tesimonialData, httpOptions)

  }
  // get testimonial
  getTestimonial(): Observable<any> {
    return this.httpClient.get(`${this.API}/profil/testimonial`,)
      .pipe(
        catchError(this.handleError)
      )
  }




  // Add user reservation
  /* userReservation(reservationData: Reservation): Observable<Reservation> {
     let RESERVATION_API_URL = `${this.API}/reservation/reservation`;
     return this.httpClient.post<Reservation>(RESERVATION_API_URL, reservationData)
       .pipe(
         catchError(this.handleError)
       )
   }
   */





  // Get single object

  /*
   // Update
   updateUser(servicePut: serviceUpdate): Observable<serviceUpdate> {
     let API_REGISTER_URL = `${this.REGISTER_API}/update-book`;
     return this.httpClient.put<serviceUpdate>(API_REGISTER_URL, servicePut, { headers: this.httpHeaders })
       .pipe(
         catchError(this.handleError)
       )
   }
   */
  //updat password user
  updateUserPassword(updatePassword: Config): Observable<Config> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.httpClient.put<Config>(this.AUTH_API + '/modifiePassword', updatePassword, httpOptions)

  }
  /* 
 
 
    // Update
    update_Password(servicePut: UpdatPassword): Observable<UpdatPassword> {
      let API_REGISTER_URL = `${this.SERVICE_UPDATE_PASSWORD}/SERVICE_UPDATE_PASSWORD`;
      return this.httpClient.put<UpdatPassword>(API_REGISTER_URL, servicePut, { headers: this.httpHeaders })
        .pipe(
          catchError(this.handleError)
        )
    }
    */
  updatePassword(id: number, post: Config): Observable<any> {
    return this.httpClient.put(this.API + '/modifiePassword' + id, JSON.stringify(post), httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }/*
  
   // Delete
   deleteUser(id:number): Observable<unknown> {
     let API_REGISTER_URL = `${this.REGISTER_API}/delete-book/${id}`;
     return this.httpClient.delete(API_REGISTER_URL, { headers: this.httpHeaders}).pipe(
         catchError(this.handleError)
       )
   }*/


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