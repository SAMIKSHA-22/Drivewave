import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from '../../../models/customer.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-customer-setting',
  templateUrl: './customer-setting.component.html',
  styleUrls: ['./customer-setting.component.scss']
})
export class CustomerSettingComponent  implements OnInit{
  formData = {
    name: '',
    password: ''
  };

  submitted: boolean = false;

  onSubmit(){
    this.submitted = true;
  }
  customer:any;
  user:any;
  constructor(
    private snackBar:MatSnackBar,
    private _customer:CustomerService,
    private _login:LoginService,
  ){

  }

  ngOnInit(): void {
    this.user = this._login.getUser();
  }

  userInfo(formdata:any){
    this.customer = formdata;
    this.customer.id = this.user.id;
    console.log( this.customer);
    this._customer.updateCustomer(this.customer).subscribe({
      next: (data:any) => {
        // this.user.put(data);
        console.info(data);
        this.snackBar.open(this.user.name + " has been successfully updated",'Ok',{
          duration: 5*1000,
        });
      }, 
      error: (error: any) => {
        console.error(error);
      }
    }); 
  }

  
  
  }

