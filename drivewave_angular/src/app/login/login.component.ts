import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import apiUrl from '../utilities/baseUrl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  jwtRequest:any = {
    email:'',
    password:''
  }

  constructor(
    private _login:LoginService,
    private toaster:MatSnackBar,
    private http:HttpClient,
    private router:Router,

  ){}

    getLogin() {
      if (this.jwtRequest.email == '') {
        this.toaster.open("Email is required.",'ok',{
          duration: 500,
        });
        return;
      }
      else if (this.jwtRequest.password == '') {
        this.toaster.open("Password is required.",'ok',{
          duration: 5000,
        });
        return;
      } else {
        this.http.post(`${apiUrl}/auth/login`,this.jwtRequest).subscribe({
          next: (data:any) => {
            console.info(data);
            this._login.setUser(data);
            // this._login.setToken(data.token);
            // this.getCurrentUser();
            var role = this._login.getRole();
            if (role != null) {
              if(role.toUpperCase() == 'ADMIN') {
                this.router.navigate(['admin/car']);
              }
              if (role.toUpperCase() == 'CUSTOMER') {
                this.router.navigate(['customer/booking']);
              }
            }
          },
          error: error => {
            console.error(error);
            this.toaster.open(error.error,'',{
              duration: 5000,
            }); 
          }
        });
      }
    }

  //  getCurrentUser() {
  //   this.http.get(`${apiUrl}/auth/current-user`).subscribe({
  //     next: (data:any) => {
  //       console.info(data);
  //       this._login.setUser(data);
  //     },
  //     error:error => {
  //       console.error(error);
  //       this.toaster.open("error occurs",'',{
  //         duration:500,
  //       });
  //     }
  //   })
  // }


}
