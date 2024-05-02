import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import { QuickbookingComponent } from './quickbooking/quickbooking.component';
import { CarsComponent } from './cars/cars.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule } from '@angular/forms'; 
import {MatRadioModule} from '@angular/material/radio';
import { authInterceprotProviders } from './services/interceptor/authInterceptor.interceptor';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AdminCustomerComponent } from './pages/admin/admin-customer/admin-customer.component';
import { CustomerHomeComponent } from './pages/customer/customer-home/customer-home.component';
import { CustomerBookingComponent } from './pages/customer/customer-booking/customer-booking.component';
import { CustomerPaymentComponent } from './pages/customer/customer-payment/customer-payment.component';
import { CustomerCarComponent } from './pages/customer/customer-car/customer-car.component';
import { SettingComponent } from './setting/setting.component';
import { CustomerSettingComponent } from './pages/customer/customer-setting/customer-setting.component';
import { AdminPaymentComponent } from './pages/admin/admin-payment/admin-payment.component';
import { BookingComponent } from './pages/admin/booking/booking.component';
import { AdminCarComponent } from './pages/admin/admin-car/admin-car.component';
import { AdminSettingComponent } from './pages/admin/admin-setting/admin-setting.component';
import { CustomerHelpComponent } from './pages/customer/customer-help/customer-help.component';
import { AdminHelpComponent } from './pages/admin/admin-help/admin-help.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { AvailableCarsComponent } from './pages/customer/available-cars/available-cars.component';
import { SearchComponent } from './components/search/search.component';
import { ContactusComponent } from './contactus/contactus.component';
// import {MAT_FORM_FIELD,MatFormFieldAppearance} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    QuickbookingComponent,
    CarsComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
  
    AdminCustomerComponent,
       CustomerHomeComponent,
       CustomerBookingComponent,
       CustomerPaymentComponent,
       CustomerCarComponent,
       SettingComponent,

       CustomerSettingComponent,
       AdminPaymentComponent,
       BookingComponent,
       AdminCarComponent,
       AdminSettingComponent,
       CustomerHelpComponent,
       AdminHelpComponent,
       AvailableCarsComponent,
       SearchComponent,
       ContactusComponent,
  ],
  imports: [
    MatButtonModule,
    MatDatepickerModule,
    BrowserModule,
   MatTableModule,
    
    MatSlideToggleModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MatRadioModule,
    MatCardModule,
    MatChipsModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule
    
  ],
  providers: [authInterceprotProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
