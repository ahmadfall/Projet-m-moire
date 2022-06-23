import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:4000';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  // services
  getServices(): Observable<any> {
    return this.http.get(API_URL + '/service/service', { responseType: 'json' });
  }
  // Commandes
  getCommands(): Observable<any> {
    return this.http.get(API_URL + '/mescommande', { responseType: 'json' });
  }
  //Profile
  getProfile(): Observable<any> {
    return this.http.get(API_URL + '/profil/monprofil', { responseType: 'json' });
  }
  // Testimonial
  getTestimonial(): Observable<any> {
    return this.http.get(API_URL + '/profil/testimonial', { responseType: 'json' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}