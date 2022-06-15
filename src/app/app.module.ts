import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { GalerieSectionComponent } from './galerie-section/galerie-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { RegionTravelComponent } from './region-travel/region-travel.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SectionListComponent } from './section-list/section-list.component';
import { CartComponent } from './cart/cart.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { ServiceComponent } from './service/service.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationServiceComponent } from './reservation-service/reservation-service.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ServiceAddComponent } from './service-add/service-add.component';
import { PostTestimonialComponent } from './post-testimonial/post-testimonial.component';
import { CrudService } from './_services/crud.service';

@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
    HeroHeaderComponent,
    ServiceSectionComponent,
    GalerieSectionComponent,
    AboutSectionComponent,
    TestimonialComponent,
    FooterComponent,
    RegionTravelComponent,
    AdminFormComponent,
    PageNotFoundComponent,
    SectionListComponent,
    CartComponent,
    CarRentalComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    EditPasswordComponent,
    ServiceComponent,
    ReservationComponent,
    ReservationServiceComponent,
    UsersListComponent,
    HotelsComponent,
    ServiceAddComponent,
    PostTestimonialComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
 
  
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
