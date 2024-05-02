import { Component, OnInit } from '@angular/core';
import { AvailableCarsComponent } from '../available-cars/available-cars.component';
import { VehicleModel } from 'src/app/models/vehicleModel.model';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';
import { BookingService } from 'src/app/services/booking.service';
import { LoginService } from 'src/app/services/login.service';
import { Booking } from '../../../models/bookingModel.model';

@Component({
  selector: 'app-customer-booking',
  templateUrl: './customer-booking.component.html',
  styleUrls: ['./customer-booking.component.scss']
})
export class CustomerBookingComponent implements OnInit {


  user:any;
  Bookings:any[] =[];
    constructor(
    private _booking:BookingService,
    private _login:LoginService
   
    ){}

  ngOnInit(): void {
this.user = this._login.getUser();
this.getBookings();
  }

  getBookings(){
    this._booking.getBookingByCustomer(this.user.id).subscribe({
      next:(data:any) =>{
        this.Bookings =data;
        console.info(data);
      },
      error:(error:any) => {
        console.error(error);
      }
    });
  }
 
 
  }



