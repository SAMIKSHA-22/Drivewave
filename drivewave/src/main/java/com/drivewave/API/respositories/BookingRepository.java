package com.drivewave.API.respositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.drivewave.API.entities.Booking;
import com.drivewave.API.entities.Customer;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

    public List<Booking> findByCustomer(Customer customer);
}
