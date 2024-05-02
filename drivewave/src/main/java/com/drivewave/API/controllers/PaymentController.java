package com.drivewave.API.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drivewave.API.entities.Customer;
import com.drivewave.API.entities.Payment;
import com.drivewave.API.services.CustomerService;
import com.drivewave.API.services.PaymentService;

@RestController
@RequestMapping("/payment")
@CrossOrigin(origins = { "*" }, maxAge = 4800, allowCredentials = "false")
public class PaymentController {
    @Autowired
    PaymentService paymentService;
    @Autowired
    CustomerService customerService;

    @PostMapping("/add")
    public ResponseEntity<?> addPayment(@RequestBody Payment payment) {

        try {
            payment.setPaymentDate(new Date());
            var _payment = this.paymentService.createPayment(payment);
            return ResponseEntity.ok(_payment);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePayment(@PathVariable int id) {
        try {
            this.paymentService.deletePaymentById(id);
            return ResponseEntity.ok("Successfully deleted");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<?> getPayments(@PathVariable int id) {
        try {
            Customer customer = this.customerService.getCustomerById(id);
            if (customer != null) {
                var payments = this.paymentService.getPaymentByCustomer(customer);
                return ResponseEntity.ok(payments);
            } else {
                return ResponseEntity.badRequest().body("Customer doesn't exist.");
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }
}
