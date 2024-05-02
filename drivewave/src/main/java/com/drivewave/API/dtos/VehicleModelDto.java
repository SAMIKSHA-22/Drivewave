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
public class VehicleModelDto implements Serializable {
    private String name;
    private String brandName;
    private String fuelType;
    private String transmission;
    private String colorName;
    private String modelYear;
    private String categories;
    private String rentalPrice;
    private String description;
    private Date addedDate;
    private Date updatedDate;
    private String noOfGears;
    private int id;
    private String logo;
    private int discount;
    private int quantity;
    private Date from;
    private Date to;

    private List<Object> images;
    // private List<BookingDto> bookings;
    // private List<PaymentDto> payments;

}
