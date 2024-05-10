import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import apiUrl from '../utilities/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class AdminPaymentService {

  constructor(private http:HttpClient) { }
 
  approveBooking(bookingId:any) {
    return this.http.get(`${apiUrl}/admin/booking/${bookingId}`);
  }
}
