package com.drivewave.API.dtos;

import java.io.Serializable;
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
public class BookingDtoDetails {
    private int id;
    private Date fromDate;
    private Date toDate;
    private int days;
    private String status;
    private boolean isEnable;
    private Date bookingdDate;
    private Date modifiedDate;
    @JsonIgnore
    private CustomerDto customer;
    // @JsonIgnore
    private List<VehicleModelDto> vehicleModels;
    // @JsonIgnore
    private List<PaymentDto> payments;

}