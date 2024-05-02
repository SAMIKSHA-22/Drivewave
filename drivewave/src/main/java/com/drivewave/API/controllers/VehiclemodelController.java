package com.drivewave.API.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drivewave.API.entities.VehicleModel;
import com.drivewave.API.services.VehiclemodelService;

@RestController
@RequestMapping("/vehicleModel")
@CrossOrigin(origins = { "*" }, maxAge = 4800, allowCredentials = "false")
public class VehiclemodelController {
    @Autowired
    VehiclemodelService vehicleModelService;

    @PostMapping("/add")
    public ResponseEntity<?> addVehiclemodel(@RequestBody VehicleModel vehicleModel) {

        try {
            vehicleModel.setAddedDate(new Date());
            var _vehicleModel = this.vehicleModelService.createVehicleModel(vehicleModel);
            return ResponseEntity.ok(_vehicleModel);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateVehiclemodel(@RequestBody VehicleModel vehicleModel, @PathVariable int id) {

        try {
            var car = this.vehicleModelService.getVehicleModelById(id);
            if (car != null) {
                car = vehicleModel;
                car.setId(id);
                car.getImages().forEach(x -> x.setVehicleModel(vehicleModel));
                vehicleModel.setUpdatedDate(new Date());
                var _vehicleModel = this.vehicleModelService.updateVehicleModel(vehicleModel);
                return ResponseEntity.ok(_vehicleModel);
            } else {
                return ResponseEntity.badRequest().body("No car is available.");
            }

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getVehicleById(@PathVariable int id) {
        try {
            var car = this.vehicleModelService.getVehicleModelById(id);
            car.setImages(car.getImages());
            return ResponseEntity.ok(car);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @GetMapping("/getAllVehicles")
    public ResponseEntity<?> getAllVehicleModel() {
        try {
            List<VehicleModel> vehicleModels = new ArrayList<>();
            var vehicles = vehicleModelService.getAllVehicleModels();
            if (vehicles != null) {
                for (VehicleModel vehicleModel : vehicles) {
                    // var images = vehicleModel.getImages();
                    vehicleModel.setImages(vehicleModel.getImages().size() > 0 ? vehicleModel.getImages() : null);
                    // vehicleModel.setImages(images);
                    vehicleModels.add((vehicleModel));
                }
            }
            return ResponseEntity.ok(vehicleModels);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    // http://localhost:8585/vehiclemodel/deleteVehicleModel/10
    @DeleteMapping("/deleteVehicleModel/{vehicleId}")
    public ResponseEntity<?> deleteVehicleModel(@PathVariable int vehicleId) {
        try {
            vehicleModelService.deleteVehicleModelById(vehicleId);
            return ResponseEntity.ok("Successfully deleted.");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }
}
