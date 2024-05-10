import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PaymentCustomerService } from 'src/app/services/payment-customer.service';
import { Payment } from '../../../models/paymentModel.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.scss']
})
export class AdminPaymentComponent implements OnInit {
constructor(
  private _payment:PaymentCustomerService,
  
){}

Payment:any[]= [];

  ngOnInit(): void {

    this.getAllPayment();
  }
dataSource = new MatTableDataSource<any>;
displayedColumns: string[] = ['No.','CustomerName', 'Advance', 'Deposit', 'Method','Status','Date','Action'];

  getAllPayment(){
    this._payment.getAllPayment().subscribe({
      next:(data:any) => {
        this.Payment =data;
        this.dataSource = new MatTableDataSource(this.Payment);
        console.info(data);
      },
      error:(error:any) => {
        console.error(error);
      }
    });
  }
}
