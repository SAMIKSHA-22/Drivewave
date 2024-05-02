import { Component, Injectable, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleModel } from '../models/vehicleModel.model';
import { CarsService } from '../services/cars.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-quickbooking',
  templateUrl: './quickbooking.component.html',
  styleUrls: ['./quickbooking.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class QuickbookingComponent implements OnInit {

  carId!: number;
  car: any;
  cars: VehicleModel[] = [];
  color: string[] = ["Red", "white", "Black", "Blue", "Brown", "Yellow"];
  categories: string[] = ["mini", "prime sedan ", "prime SUV"];
  gear: number[] = [4, 5, 6, 7];
  payment: any;
  rentFrom: any = new Date;
  rentTo: any = new Date;
  Days: any;
  offerPrice: number = 0;
  calculatedAmount: number = 0;

  @ViewChild('addPayment') addPayment!: TemplateRef<any>;
  @ViewChild('bookingDialog') bookingDialog!: TemplateRef<any>;
  @ViewChild('PaymentDialog') paymentDialog!: TemplateRef<any>;
  public car_emmiter = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private _car: CarsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllVehicle();
    this.carId = this.route.snapshot.params['id'];
    console.info("Car id is: ", this.carId);
  }


  getBook(car: VehicleModel) {
    console.info(car);
    this.car_emmiter.next(car.id);
    this.router.navigate([`customer/booking/${car.id}`]);
  }

  getAllVehicle() {
    this._car.getAllVehicleModels().subscribe({
      next: (data: any) => {
        this.cars = data;
        // this.dataSource = new MatTableDataSource(data);
        console.info(data);

      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  getBookingDate() {
    console.log(this.rentFrom);
    console.log(this.rentTo);
    this.CalculateDays();
    this.calculatedAmount = this.calculatePrice(this.Days, this.car.rentalPrice, 25);
  }

  CalculateDays() {
    const rentFromModified = new Date(this.rentFrom);
    const rentToModified = new Date(this.rentTo);
    const Time = rentFromModified.getTime() - rentToModified.getTime();
    this.Days = -Time / (1000 * 3600 * 24);
  }

  calculatePrice(numOfDays: number, amount: number, discount: number) {
    discount = discount ?? 0;
    var price = numOfDays * amount;
    this.offerPrice = amount * (discount / 100);
    return price - this.offerPrice;
  }

  openBookingDia(selectedCar: VehicleModel) {
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

  openPaymentDialog(selectedPayment:any) {
    // this.payment = selectedPayment;
    var dialogRef = this.dialog.open(this.paymentDialog, {
      enterAnimationDuration: 350,
      exitAnimationDuration: 600
    });
  }
}


