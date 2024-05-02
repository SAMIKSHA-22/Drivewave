import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VehicleModel } from '../models/vehicleModel.model';
import apiUrl from '../utilities/baseUrl';
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private _http:HttpClient,  //constant
    private Routes:ActivatedRoute
  )
   { }

   createVehicleModel(VehicleModel:any){
    return this._http.post(`${apiUrl}/vehicleModel/add`,VehicleModel);
   }
   updateVehicleModel(id:any,VehicleModel:any){
    return this._http.put(`${apiUrl}/vehicleModel/update/${id}`,VehicleModel);
   }
   getAllVehicleModels(){
    return this._http.get(`${apiUrl}/vehicleModel/getAllVehicles`);
   }
   getVehicleModelById(id:any){
    return this._http.get(`${apiUrl}/vehicleModel/${id}`);
   }
   deleteVehicleModel(vehicleId:any){
    // http://localhost:8585/vehicleModel/deleteVehicleModel/5
    return this._http.delete(`${apiUrl}/vehicleModel/deleteVehicleModel/${vehicleId}`);
  }
}
