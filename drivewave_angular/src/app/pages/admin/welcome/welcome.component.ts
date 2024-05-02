import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router, Routes } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  
@ViewChild('sidenav') sidenav!: MatSidenav;

reason = '';

close(reason: string) {
  this.reason = reason;
  this.sidenav.close();
}
admin:any;
constructor(
  private _login:LoginService,
  private router:Router,
  ){}



logOut() {
  this._login.logOut();
  this.router.navigate(['login']);
}
  // user = {
  //   name:"",
  //   brandName:"",
  //   fuelType:"",
  //   transmission:"",
  //   colorName:"",
  //   modelYear:"",
  //   categories:"",
  //   rentalPrice:"",
  //   description:"",
  //   addedDate:"",
  //   updatedDate:"",
  //   noOfGears:"",
  // }

  // }

 

 
  //  constructor(private Routes:ActivatedRoute,
  //   private snackBar:MatSnackBar,
  //   private _student:StudentService,
  //   private dialogref : MatDialog) {}
    
  ngOnInit(): void {
      
  }
 
 
  // welcomecomponentsubmitted() {
  //   console.log( this.user);
  //   this._student.createStudent(this.user).subscribe({
  //     next: (data:any) => {
  //       console.info(data);
  //       this.snackBar.open(this.user.name + " has been successfully added",'Ok',{
  //         duration: 5*1000,
  //       });
  //     }, 
  //     error: error => {
  //       console.error(error);
  //     }
  //   });
    
  }

