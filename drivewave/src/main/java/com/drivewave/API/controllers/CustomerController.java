package com.drivewave.API.controllers;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drivewave.API.entities.Customer;
import com.drivewave.API.services.CustomerService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = { "*" }, maxAge = 4800, allowCredentials = "false")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    Logger LOGGER = LoggerFactory.getLogger(CustomerController.class);

    @PostMapping("/add")
    public ResponseEntity<?> addCustomer(@RequestBody Customer customer) {

        try {
            customer.setRegDate(new Date());
            var _customer = this.customerService.createCustomer(customer);
            return ResponseEntity.ok(_customer);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCustomer(@PathVariable int id) {
        try {
            Customer customer = this.customerService.getCustomerById(id);
            return ResponseEntity.ok(customer);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateCustomer(@PathVariable int id, @RequestBody Customer customer) {

        try {
            var existingCustomer = this.customerService.getCustomerById(customer.getId());
            if (existingCustomer != null) {
                existingCustomer
                        .setEmail(customer.getEmail() != null ? customer.getEmail() : existingCustomer.getEmail());
                existingCustomer.setFullName(
                        customer.getFullName() != null ? customer.getFullName() : existingCustomer.getFullName());
                existingCustomer.setDob(customer.getDob() != null ? customer.getDob() : existingCustomer.getDob());
                existingCustomer
                        .setGender(customer.getGender() != null ? customer.getGender() : existingCustomer.getGender());
                existingCustomer.setMobileNo(
                        customer.getMobileNo() != null ? customer.getMobileNo() : existingCustomer.getMobileNo());
                existingCustomer.setIdProof(
                        customer.getIdProof() != null ? customer.getIdProof() : existingCustomer.getIdProof());
                existingCustomer.setPassword(
                        customer.getPassword() != null ? customer.getPassword() : existingCustomer.getPassword());

                var _customer = this.customerService.updateCustomer(existingCustomer);
                return ResponseEntity.ok(_customer);
            } else {
                return ResponseEntity.badRequest().body("Invalid request.");
            }

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllCustomer() {
        try {
            List<Customer> customers = this.customerService.getAllCustomer();
            return ResponseEntity.ok(customers);
        } catch (Exception e) {
            this.LOGGER.error("{}", e.getMessage());
            return ResponseEntity.internalServerError().body(e.getMessage());

        }
    }

}
