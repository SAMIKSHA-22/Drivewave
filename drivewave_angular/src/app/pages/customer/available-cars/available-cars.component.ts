import { Component, Inject, Injectable, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VehicleModel } from 'src/app/models/vehicleModel.model';
import { CarsService } from '../../../services/cars.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Payment } from '../../../models/paymentModel.model';
import {ErrorStateMatcher} from '@angular/material/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Booking } from 'src/app/models/bookingModel.model';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { BookingService } from '../../../services/booking.service';
@Component({
  selector: 'app-available-cars',
  templateUrl: './available-cars.component.html',
  styleUrls: ['./available-cars.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class  AvailableCarsComponent implements OnInit {

  car:any;
  cars:VehicleModel[] =  [];
  color:string[] = ["Red","white","Black","Blue","Brown","Yellow"];
  categories:string[]=["mini","prime sedan ","prime SUV"];
  gear:number[]=[4,5,6,7];
  payment!:Payment;
  booking:Booking = {
    id: 0,
    fromDate: new Date,
    toDate: new Date,
    days: 0,
    status: 'Pending',
    isEnable: false,
    bookingDate: new Date,
    modifiedDate: 0,
    vehicleModels: {},
    customer: {},
    payments:{}
  };
  showConfirm:boolean = false;
  rentFrom:any = new Date;
  rentTo:any = new Date;
  Days:any;
  offerPrice:number = 0;
  calculatedAmount:number = 0;

  // public car_emmiter = new Subject<VehicleModel>();
  @ViewChild('addPayment') addPayment!:TemplateRef<any>;
  @ViewChild('bookingDialog') bookingDialog!:TemplateRef<any>;
  @ViewChild('paymentDialog') paymentDialog!:TemplateRef<any>;
  public car_emmiter = new Subject<any>();
  // updatecars:VehicleModel[] = [];

  // @ViewChild('addCar') addCar!:TemplateRef<any>
  // @ViewChild('updateCar') updateCar!:TemplateRef<any>;
  private _cars: any;
  constructor(
    private _car:CarsService,
    private dialog:MatDialog,
    private snackBar:MatSnackBar,
    private router:Router,
    private _login:LoginService,
    private _booking:BookingService,
    // @Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<AvailableCarsComponent>,
    // private service: CustomerService
    ){

    }

  ngOnInit(): void {
    this.getAllVehicle();
  }


getBook(car:VehicleModel) {
  console.info(car);
  this.car_emmiter.next(car.id);
  this.router.navigate([`customer/booking/${car.id}`])
}

getAllVehicle() {
this._car.getAllVehicleModels().subscribe({
  next:(data:any) => {
    this.cars = data;
    // this.dataSource = new MatTableDataSource(data);
    console.info(data);

  },
   error: (error:any) => {
    console.error(error);
   }
});
}

getBookingDate() {
  console.log(this.rentFrom);
  console.log(this.rentTo);
this.CalculateDays();
this.calculatedAmount = this.calculatePrice(this.Days,this.car.rentalPrice,25);
}

 getPay(form:any) {
  this.payment = form;
 }

 CalculateDays(){
  const rentFromModified = new Date(this.rentFrom);
  const rentToModified = new Date(this.rentTo);
 const Time=rentFromModified.getTime() - rentToModified.getTime();
 this.Days = - Time/(1000*3600*24)
 }
 

 calculatePrice(numOfDays:number,amount:number,discount:number) {
  discount = discount?? 0;
  var price = numOfDays * amount;
  this.offerPrice = amount * (discount/100);
  return price - this.offerPrice;
 }

openBookingDialog(selectedCar:VehicleModel) {
  this.car = selectedCar;
  var dialogRef = this.dialog.open(this.bookingDialog, {
    enterAnimationDuration: 350,
    exitAnimationDuration: 600
  });
}
range = new FormGroup({
  start: new FormControl<Date | null>(null),
  end: new FormControl<Date | null>(null),
});

// --sweetAlert
sweetAlert() {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
  
}

openPaymentDialog(selectedPayment:any) {
  this.dialog.open(this.paymentDialog, {
    enterAnimationDuration: 600,
    exitAnimationDuration: 400,
    id: 'pmtD',
      direction: 'ltr',
      hasBackdrop: true,
      disableClose: true,
      maxWidth: '800px',
  });
}

bookRide() {
  this.booking.fromDate = this.rentFrom;
  this.booking.toDate = this.rentTo;
  this.booking.days = this.Days;
  this.booking.payments = this.payment;
  this.booking.customer = this._login.getUser();
  this.booking.status = 'Pending';
  this.booking.vehicleModels = this.car;
  this.booking.vehicleModels.images = null;
  console.log(this.booking);

  this._booking.addbooking(this.booking).subscribe({
    next: (data:any) => {
      console.log(data);
    },
    error: error => {
      console.log(error);
    }
  });
}

}


