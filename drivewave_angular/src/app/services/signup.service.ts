import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import apiUrl from '../utilities/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http:HttpClient,
  ) { }

  getRegister(customer:any) {
    return this.http.post(`${apiUrl}/register/`,customer);
  }
}
