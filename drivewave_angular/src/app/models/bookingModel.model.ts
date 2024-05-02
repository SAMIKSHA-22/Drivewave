import { Payment } from "./paymentModel.model";

export interface Booking {
    id:number;
    fromDate:Date;
    toDate:Date;
    days:number;
    status:String;
    isEnable:boolean;
    bookingDate:Date;
    modifiedDate:number;
    vehicleModels:any;
    customer:any;
    payments:any;
  }