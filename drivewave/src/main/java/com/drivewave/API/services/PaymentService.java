package com.drivewave.API.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drivewave.API.entities.Customer;
import com.drivewave.API.entities.Payment;

import com.drivewave.API.respositories.PaymentRepository;

@Service
public class PaymentService {
    @Autowired
    PaymentRepository paymentRepo;

    public Payment createPayment(Payment payment) throws Exception {

        if (payment != null) {
            return this.paymentRepo.save(payment);
        } else {
            throw new Exception("Object is null");
        }
    }

    public Payment updatePayment(Payment payment) throws Exception {
        if (payment != null) {
            return this.paymentRepo.save(payment);
        } else {
            throw new Exception("Object is null");
        }
    }

    public List<Payment> getAllPayment() {
        return this.paymentRepo.findAll();
    }

    public Payment getPaymentById(int id) throws Exception {
        var payment = this.paymentRepo.findById(id).get();
        if (payment != null) {
            return payment;
        } else {
            throw new Exception("Payment not found");
        }
    }

    public void deletePaymentById(int id) {
        this.paymentRepo.deleteById(id);
    }

    public List<Payment> getPaymentByCustomer(Customer customer) {
        var payments = this.paymentRepo.findPaymentByCustomer(customer);
        return payments;
    }
}
