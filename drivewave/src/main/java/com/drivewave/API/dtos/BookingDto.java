package com.drivewave.API.dtos;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingDto {
    private int id;
    private Date fromDate;
    private Date toDate;
    private int days;
    private String status;
    private boolean isEnable;
    private Date bookingdDate;
    private Date modifiedDate;
    private CustomerDto customer;
    private VehicleModelDto vehicleModels;
    // private PaymentDto payments;

}
