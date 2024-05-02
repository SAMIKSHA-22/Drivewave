import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { authGuard } from './guards/auth.guard';
import { customerGuard } from './guards/customer.guard';
import { QuickbookingComponent } from './quickbooking/quickbooking.component';
import { CarsComponent } from './cars/cars.component';
import { Customer } from 'src/app/models/customer.model';

import { AdminCustomerComponent } from './pages/admin/admin-customer/admin-customer.component';
import { HomeComponent } from './home/home/home.component';
import { CustomerHomeComponent } from './pages/customer/customer-home/customer-home.component';
import { CustomerBookingComponent } from './pages/customer/customer-booking/customer-booking.component';
import { CustomerPaymentComponent } from './pages/customer/customer-payment/customer-payment.component';
import { CustomerCarComponent } from './pages/customer/customer-car/customer-car.component';
import { CustomerSettingComponent } from './pages/customer/customer-setting/customer-setting.component';
import { AdminPaymentComponent } from './pages/admin/admin-payment/admin-payment.component';
import { BookingComponent } from './pages/admin/booking/booking.component';
import { AdminCarComponent } from './pages/admin/admin-car/admin-car.component';
import { AdminSettingComponent } from './pages/admin/admin-setting/admin-setting.component';
import { CustomerHelpComponent } from './pages/customer/customer-help/customer-help.component';
import { AdminHelpComponent } from './pages/admin/admin-help/admin-help.component';
import { AvailableCarsComponent } from './pages/customer/available-cars/available-cars.component';
import { SearchComponent } from './components/search/search.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: "signup",
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: "payment",
    component: CustomerPaymentComponent,
    pathMatch: 'full',
  },
  {
    path:"car",
    component:AdminCarComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: "contactus",
    component: ContactusComponent,
    pathMatch: 'full',
  },
  {
    path: "search",
    component: SearchComponent,
    pathMatch: 'full',
  },
  {
    path: "quickbooking",
    component:QuickbookingComponent ,
    pathMatch: 'full',
  },

  {
    path: "login", 
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: "admin",
    component: WelcomeComponent,
    canActivate:[authGuard],
    children: [
      {
        path:"customer",
        component:AdminCustomerComponent,
      },
      {
        path:"payment",
        component:AdminPaymentComponent,
      },
      {
         path:"booking",
         component:BookingComponent,
      },
      {
        path:"car",
        component:AdminCarComponent,
      },
      {
        path:"help",
        component:AdminHelpComponent,
      },
      {
        path:"setting",
        component:AdminSettingComponent,
      },
      
      
    ]
  },
  {
    path: "customer",
    component: CustomerHomeComponent,
    canActivate:[customerGuard],
    children: [
      {
        path:"booking/:id",
        component: CustomerBookingComponent,
      },
      {
        path:"booking",
        component: CustomerBookingComponent,
      },

      {
        path:"available-cars",
        component: AvailableCarsComponent,
      },
      {
        path:"payment",
        component:CustomerPaymentComponent ,
      },
      {
        path:"cars",
        component:CustomerCarComponent,
      },
      {
        path:"Setting",
        component:CustomerSettingComponent,
      },
      {
        path:"Help",
        component:CustomerHelpComponent,
      },

    ]
  },
  {
    path: "quickbooking/:id",
    component: QuickbookingComponent,
    pathMatch: 'full',
   
  },
  {
    path: "cars",
    component: CarsComponent,
    pathMatch: 'full',
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
