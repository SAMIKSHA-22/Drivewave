import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private _http:HttpClient, private Routes:ActivatedRoute) { }

  getAllCustomer() {
    return this._http.get('http://localhost:8585/customer/all');
  }

  createCustomer(Customer:any) {
    return this._http.post('http://localhost:8585/student',Customer);

  }
  
  deleteCustomer(id:any){
    return this._http.delete(`http://localhost:8585/student/${id}`);
  }

  updateCustomer(Customer:any){
    return this._http.put(`http://localhost:8585/customer/update`,Customer);
  }

}


