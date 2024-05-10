import { Component, OnInit } from '@angular/core';
import { PaymentCustomerService } from '../../../services/payment-customer.service';
import { Customer } from '../../../models/customer.model';
import { LoginService } from 'src/app/services/login.service';
import { Payment } from '../../../models/paymentModel.model';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.scss']
})
export class CustomerPaymentComponent implements OnInit {

constructor(
  private _payment:PaymentCustomerService,
  private _login:LoginService,
){}
user:any;
payments:any[] = [];
dataSource = new MatTableDataSource<any>;
displayedColumns: string[] = ['No.', 'Advance', 'Deposit', 'Method','Status','Date'];

  ngOnInit(): void {
    this.user = this._login.getUser();
     this.getAllPayment();
  }
 
  getAllPayment(){
    this._payment.getPaymentByCustomer(this.user.id).subscribe({
      next:(data:any) => {
    this.payments = data;
    this.dataSource = new MatTableDataSource(this.payments);
    console.info(data);
      },
      error:(error:any) => {
        console.error(error);
    }}
    );
  }
}
