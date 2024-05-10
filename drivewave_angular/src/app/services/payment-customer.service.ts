import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import apiUrl from '../utilities/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class PaymentCustomerService {

  constructor(
    private _http:HttpClient,  //constant
    private Routes:ActivatedRoute
  ) { }
  getPaymentByCustomer( customerId:any){
    return this._http.get(`${apiUrl}/payment/customer/${customerId}`)  ;

  }
  getAllPayment(){
    return this._http.get(`${apiUrl}/payment/getAllPayments`);
  }
}
