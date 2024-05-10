import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VehicleModel } from '../models/vehicleModel.model';
import apiUrl from '../utilities/baseUrl';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

    constructor(
      private _http:HttpClient,  //constant
      private Routes:ActivatedRoute
    )
     { }

     addbooking(booking:any){
        return this._http.post(`${apiUrl}/booking/add`,booking);
     }

     getBookingByCustomer(customerId:any) {
        return this._http.get(`${apiUrl}/booking/customer/${customerId}`);
     }
     getAllBookings(){
      return this._http.get(`${apiUrl}/booking/getAllBookings`);
     }
     
}