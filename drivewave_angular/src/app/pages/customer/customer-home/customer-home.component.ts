import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  user:any;

constructor( private _login:LoginService, 
  private router:Router,
  ){}


  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    this.user = this._login.getUser();
    if (this.user ==  null) {
      this.router.navigate(['login']);
    }
  }



logout(){
  this._login.logOut();
  this.router.navigate(['login']);
}
}
