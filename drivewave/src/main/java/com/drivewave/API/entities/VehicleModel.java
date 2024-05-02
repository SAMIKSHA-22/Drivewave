package com.drivewave.API.entities;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "vehicle")
public class VehicleModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String brandName;
    @Column(nullable = false)
    private String fuelType;
    @Column(nullable = false)
    private String transmission;
    @Column(nullable = false)
    private String colorName;
    @Column(nullable = false)
    private int modelYear;
    @Column(nullable = false)
    private String categories;
    @Column(nullable = false)
    private int rentalPrice;

    @Column(length = 500)
    private String description;

    private Date addedDate;
    private Date updatedDate;
    private boolean isEnable;
    private int noOfGears;
    private int discount;
    private int quantity;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonIgnore
    private Booking booking;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "vehicleModel", fetch = FetchType.EAGER, orphanRemoval = true)
    private List<VehicleImage> images;

}
