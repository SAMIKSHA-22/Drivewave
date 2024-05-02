export interface Payment {
    paymentMethod:string;
    id:number;
    amount:Float32Array;
    advancePayment:Float32Array;
    deposit:Float32Array;
    status:string;
}