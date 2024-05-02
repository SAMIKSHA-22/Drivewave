import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { SignupService } from '../../services/signup.service';
import { Customer } from 'src/app/models/customer.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  
  customer:any;

  constructor(
    private _signup: SignupService,
    private toaster:MatSnackBar
  ){}

  addCustomer(customerData:any) {
    this.customer = customerData;
    this._signup.getRegister(this.customer).subscribe({
      next: (data:any) => {
        console.log(data);
        if (data != null) {
          this.toaster.open(data.fullName + "has been successfully registered",'',{
            duration: 500,
          });
        }
        

      },
      error: error => {
        console.error(error);
        this.toaster.open("Error occurs while registering",'',{
          duration: 500
        });
      }
    });
    console.log(this.customer);
  }
  

}
