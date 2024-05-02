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
public class CustomerDto {
    private int id;
    private String fullName;
    private String mobileNo;
    private boolean enabled;

    private Date dob;
    private Date regDate;
    private String idProof;
    private String profile;
    private String gender;
    private String role;
    private String password;
    private String email;
    private boolean isAccountNonExpired;
    private boolean isAccountNonLocked;
    private boolean isCredentialsNonExpired;
    private List<BookingDto> bookings;
    private List<PaymentDto> payments;

}
