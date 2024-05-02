import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.scss']
})
export class AdminCustomerComponent implements OnInit{

  customers:any[] = [];

  constructor(private _customer:CustomerService) {}

  ngOnInit(): void {
    this.loadAllCustomer();
  }

  loadAllCustomer() {
    this._customer.getAllCustomer().subscribe({
      next: (data:any) => {
        this.customers = data;
        console.log(this.customers);
      },
      error: error => {
        console.error(error);
      }
    });
  }

}
