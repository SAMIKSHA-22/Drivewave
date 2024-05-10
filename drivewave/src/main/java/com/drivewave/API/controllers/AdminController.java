package com.drivewave.API.controllers;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drivewave.API.dtos.BookingDtoDetails;
import com.drivewave.API.entities.Booking;
import com.drivewave.API.services.BookingService;

@RestController
@RequestMapping("admin")
@CrossOrigin(origins = { "*" }, maxAge = 4800, allowCredentials = "false")
public class AdminController {

    @Autowired
    BookingService bookingService;

    @Autowired
    ModelMapper modelmapper;
    Logger LOGGER = LoggerFactory.getLogger(BookingController.class);

    @GetMapping("/booking/{bookingId}")
    public ResponseEntity<?> approveBooking(@PathVariable("bookingId") int bookingId) {
        try {
            Booking booking = bookingService.getBookingById(bookingId);
            booking.setStatus("Approved");
            var _booking = bookingService.updateBooking(booking);
            return ResponseEntity.ok(modelmapper.map(_booking, BookingDtoDetails.class));
        } catch (Exception e) {
            this.LOGGER.error("{}", e.getMessage());
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }
}
