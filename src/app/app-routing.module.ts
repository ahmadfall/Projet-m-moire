import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './about-section/about-section.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { CartComponent } from './cart/cart.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostTestimonialComponent } from './post-testimonial/post-testimonial.component';
import { ProfileComponent } from './profile/profile.component';
import { RegionTravelComponent } from './region-travel/region-travel.component';
import { RegisterComponent } from './register/register.component';
import { ReservationServiceComponent } from './reservation-service/reservation-service.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SectionListComponent } from './section-list/section-list.component';
import { ServiceAddComponent } from './service-add/service-add.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { TestimonialPostComponent } from './testimonial-post/testimonial-post.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [


  { path: '', component: SectionListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'service', component: ServiceSectionComponent },
  { path: 'dashboard', component: SectionListComponent },

  { path: 'about', component: AboutSectionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'region-travel', component: RegionTravelComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'car-rental', component: CarRentalComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'reservation/:idService', component: ReservationComponent },
  { path: 'reservation-service', component: ReservationServiceComponent },
  { path: 'reservation-service-get', component: ServiceAddComponent},
  { path: 'profile', component: ProfileComponent,
  children:[
    { path: 'commandes', component: CommandesComponent },
    { path: 'update-password', component: UpdatePasswordComponent },
    { path: 'testimonial', component: TestimonialPostComponent },

  ]
 },






  { path: '**', component: PageNotFoundComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const UserRouting = RouterModule.forChild(routes);


