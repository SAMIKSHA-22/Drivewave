package com.drivewave.API.respositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.drivewave.API.entities.Customer;
import com.drivewave.API.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

    List<Payment> findPaymentByCustomer(Customer customer);
}
