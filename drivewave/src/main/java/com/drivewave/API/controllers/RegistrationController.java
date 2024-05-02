package com.drivewave.API.controllers;

import java.util.Date;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drivewave.API.entities.Customer;
import com.drivewave.API.services.CustomerService;

import ch.qos.logback.classic.Logger;

@RestController
@RequestMapping("/register")
@CrossOrigin(origins = { "*" }, maxAge = 4800, allowCredentials = "false")
public class RegistrationController {
    @Autowired
    private CustomerService customerService;

    // @Autowired
    // private PasswordEncoder passwordEncoder;

    Logger LOGGER = (Logger) LoggerFactory.getLogger(RegistrationController.class);

    @PostMapping("/")
    public ResponseEntity<?> register(@RequestBody Customer customer) {
        try {
            customer.setEnabled(true);
            customer.setRole("CUSTOMER");
            customer.setRegDate(new Date());
            // customer.setPassword(this.passwordEncoder.encode(customer.getPassword()));
            var _cutomer = customerService.createCustomer(customer);
            return ResponseEntity.ok().body(_cutomer);
        } catch (Exception e) {
            this.LOGGER.error("{}", e.getMessage());
            return ResponseEntity.internalServerError().body("Error: " + e.getMessage());
        }
    }
}
