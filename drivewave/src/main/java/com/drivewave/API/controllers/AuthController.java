package com.drivewave.API.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drivewave.API.entities.JwtRequest;
import com.drivewave.API.respositories.AdminRepository;
import com.drivewave.API.respositories.CustomerRepository;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = { "*" }, maxAge = 4800, allowCredentials = "false")
public class AuthController {

    Logger LOGGER = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private AdminRepository adminRepo;

    @Autowired
    private CustomerRepository customerRepo;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody JwtRequest request) throws Exception {
        Object user = new Object();
        try {
            var admin = this.adminRepo.findByEmailAndPassword(request.getEmail(), request.getPassword());
            user = (admin != null) ? admin
                    : this.customerRepo.findByEmailAndPassword(request.getEmail(), request.getPassword());
            if (user != null) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.badRequest().body("Invalid username and password");
            }
        } catch (Exception e) {
            this.LOGGER.error("{}", e.getMessage());
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

}
