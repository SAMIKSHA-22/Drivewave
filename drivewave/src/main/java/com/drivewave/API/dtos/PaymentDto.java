package com.drivewave.API.dtos;

import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDto {

    private int id;
    private String paymentMethod;
    private double amount;
    private double deposit;
    private double advancePayment;
    private String status;
    private Date paymentDate;
}
