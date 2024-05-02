import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VehicleModel } from 'src/app/models/vehicleModel.model';
import { CarsService } from '../../../services/cars.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-car',
  templateUrl: './admin-car.component.html',
  styleUrls: ['./admin-car.component.scss']
})
export class AdminCarComponent  implements OnInit{

  car:any;
  cars:VehicleModel[] =  [];
  color:string[] = ["Red","white","Black","Blue","Brown","Yellow"];
  categories:string[]=["mini","prime sedan ","prime SUV"];
  dataSource:any;
  gear:number[]=[4,5,6,7];
  
  // updatecars:VehicleModel[] = [];

  @ViewChild('addCar') addCar!:TemplateRef<any>;
  @ViewChild('updateCar') updateCar!:TemplateRef<any>;
  private _cars: any;
  constructor(
    private _car:CarsService,
    private dialog:MatDialog,
    private snackBar:MatSnackBar
    ){}

  ngOnInit(): void {
    this.getAllVehicle();
  }

  openAddDialog() {
    var dialogRef = this.dialog.open(this.addCar, {
      enterAnimationDuration: 350,
      exitAnimationDuration: 600
    });
  }

  openUpdateDialog(car:VehicleModel) {
    this.car = car;
    console.log(car);
    var dialogRef = this.dialog.open(this.updateCar, {
      enterAnimationDuration: 1500,
      exitAnimationDuration: 600
    });
  }

  deleteCar(id:any){
    this._car.deleteVehicleModel(id).subscribe({
      next:(data:any) =>{
        console.info(data);
        this.cars = this.cars.filter(x => x.id != id);
        this.snackBar.open(data,'Ok',{
          duration: 5000
        });
      },
      error: error => {
        console.error(error);
      }
    });
  
  }

  postCars(formdata:any){
    this.car = formdata;
    console.log( this.car);
    this._car.createVehicleModel(this.car).subscribe({
      next: (data:any) => {
        this.cars.push(data);
        console.info(data);
        this.snackBar.open(this.car.name + " has been successfully added",'Ok',{
          duration: 5*1000,
        });
      }, 
      error: (error: any) => {
        console.error(error);
      }
    }); 
  }

  updateCars(formdata:any){
    // this.car = formdata;
    console.log( this.car);
    this._car.updateVehicleModel(this.car.id,this.car).subscribe({
      next: (data:any) => {
        console.info(data);
        this.snackBar.open(this.car.name + " has been successfully added",'Ok',{
          duration: 5*1000,
        });
      }, 
      error: (error: any) => {
        console.error(error);
      }
    });

}

editCar(car:VehicleModel) {
  this.car = car;
}

getAllVehicle(){
this._car.getAllVehicleModels().subscribe({
  next:(data:any) => {
    this.cars = data;
    this.dataSource = new MatTableDataSource(data);
    console.info(data);

  },
   error: (error:any) => {
    console.error(error);
   }
});

}



}
