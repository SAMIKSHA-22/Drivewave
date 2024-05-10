import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { LoginService } from 'src/app/services/login.service';
import { AdminPaymentService } from '../../../services/admin-payment.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  Bookings:any[] =[];
    constructor(
    private _booking:BookingService,
    private _login:LoginService,
    private _admin:AdminPaymentService
    ){}

  ngOnInit(): void {
this.getBookings();
  }

  getBookings(){
    this._booking.getAllBookings().subscribe({
      next:(data:any) =>{
        this.Bookings =data;

        console.info(data);
      },
      error:(error:any) => {
        console.error(error);
      }
    });
  }

  approve(bookingId:any) {
    this._admin.approveBooking(bookingId)
    .subscribe({
      next: (data:any) => {
        console.log(data);
        
      },
      error: error => {
        console.error(error);
      }
    });
  }
 
}
