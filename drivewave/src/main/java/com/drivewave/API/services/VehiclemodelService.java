package com.drivewave.API.services;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.drivewave.API.entities.VehicleModel;
import com.drivewave.API.respositories.VehiclemodelRepository;

@Service
public class VehiclemodelService {

    @Autowired
    VehiclemodelRepository vehicleModelRepo;

    public VehicleModel createVehicleModel(VehicleModel vehicleModel) throws Exception {
        if (vehicleModel != null) {
            return this.vehicleModelRepo.save(vehicleModel);
        } else {
            throw new Exception("Object is null");
        }
    }

    public VehicleModel updateVehicleModel(VehicleModel vehicleModel) throws Exception {
        if (vehicleModel != null) {
            return this.vehicleModelRepo.save(vehicleModel);
        } else {
            throw new Exception("Object is null");
        }
    }

    public List<VehicleModel> getAllVehicleModels() {
        return this.vehicleModelRepo.findAll();
    }

    public VehicleModel getVehicleModelById(int id) throws Exception {
        var vehicleModel = this.vehicleModelRepo.findById(id).get();
        if (vehicleModel != null) {
            return vehicleModel;
        } else {
            throw new Exception("vehicle model not found");
        }
    }

    public void deleteVehicleModelById(int id) {
        this.vehicleModelRepo.deleteById(id);
    }

}
