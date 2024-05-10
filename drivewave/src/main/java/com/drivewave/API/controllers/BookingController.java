package com.drivewave.API.controllers;

import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.util.LinkedList;
import java.time.LocalDateTime;
import java.util.ArrayList;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drivewave.API.dtos.BookingDto;
import com.drivewave.API.dtos.BookingDtoDetails;
import com.drivewave.API.dtos.PaymentDto;
import com.drivewave.API.entities.Booking;
import com.drivewave.API.entities.Customer;
import com.drivewave.API.entities.Payment;
import com.drivewave.API.entities.VehicleModel;
import com.drivewave.API.services.BookingService;
import com.drivewave.API.services.CustomerService;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins = { "*" }, maxAge = 4800, allowCredentials = "false")
public class BookingController {

    @Autowired
    BookingService bookingService;

    @Autowired
    CustomerService customerService;

    @Autowired
    ModelMapper modelMapper;

    Logger LOGGER = LoggerFactory.getLogger(BookingController.class);

    // @PostMapping("/add")
    // public ResponseEntity<?> addbooking(@RequestBody BookingDto booking) {
    // List<Payment> _payments = new ArrayList<Payment>();
    // try {
    // Booking _booking = new Booking();
    // // _booking = modelMapper.map(booking, Booking.class);
    // _booking.setBookingDate(new Date());

    // // var pay = modelMapper.map(booking.getPayments(), Payment.class);
    // // pay.setCustomer(modelMapper.map(booking.getCustomer(), Customer.class));
    // // _payments.add(pay);
    // _booking.setPayments(_payments);

    // List<VehicleModel> _vehicleModels = new ArrayList<VehicleModel>();
    // // var _vehicle = modelMapper.map(booking.getVehicleModels(),
    // VehicleModel.class);
    // // _vehicleModels.add(_vehicle);
    // _booking.setVehicleModels(_vehicleModels);

    // _booking.setCustomer(modelMapper.map(booking.getCustomer(), Customer.class));
    // _booking.setFromDate(booking.getFromDate());
    // _booking.setToDate(booking.getToDate());
    // _booking.setEnable(false);
    // _booking.setDays(booking.getDays());
    // // _booking.setStatus("Pending");
    // _booking.setStatus(booking.getStatus());
    // var booked = bookingService.createBooking(_booking);
    // System.out.println(booked);

    // return ResponseEntity.ok("Ok");
    // } catch (Exception e) {
    // return ResponseEntity.internalServerError().body(e.getMessage());
    // }
    // }

    @PostMapping("/add")
    public ResponseEntity<?> addbooking(@RequestBody HashMap<String, Object> booking) {
        try {
            Booking _booking = new Booking();
            var vehicles = new ArrayList<VehicleModel>();
            var payments = new ArrayList<Payment>();

            for (String key : booking.keySet()) {
                System.out.println(key);
                System.out.println(booking.get(key));
                if (key == "customer") {
                    _booking.setCustomer(modelMapper.map(booking.get(key), Customer.class));
                }
                if (key == "vehicleModels") {
                    vehicles.add(modelMapper.map(booking.get(key), VehicleModel.class));
                    _booking.setVehicleModels(vehicles);
                }
                if (key == "payments") {
                    var payment = modelMapper.map(booking.get(key), Payment.class);
                    payment.setPaymentDate(new Date());
                    payment.setStatus("Pending");
                    payment.setCustomer(modelMapper.map(booking.get("customer"), Customer.class));
                    payments.add(payment);
                    _booking.setPayments(payments);

                }
                if (key == "fromDate") {
                    Date date = modelMapper.map(booking.get(key), Date.class);
                    _booking.setFromDate(date);
                }
                if (key == "toDate") {
                    Date date = modelMapper.map(booking.get(key), Date.class);
                    _booking.setToDate(date);
                }
                if (key == "status") {
                    _booking.setStatus(booking.get(key).toString());
                }
                if (key == "days") {
                    _booking.setDays(Integer.parseInt(booking.get(key).toString()));
                }
                _booking.setEnable(false);
                _booking.setBookingDate(new Date());

            }
            System.out.println(booking.toString());
            var _booked = this.bookingService.createBooking(_booking);
            return ResponseEntity.ok("Ok");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBooking(@PathVariable int id) {
        try {
            var booking = this.bookingService.getBookingById(id);
            return ResponseEntity.ok(booking);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @GetMapping("/getAllBookings")
    public ResponseEntity<?> getAllBooking() {
        List<BookingDtoDetails> bookingDtos = new LinkedList<BookingDtoDetails>();
        try {
            List<Booking> bookings = this.bookingService.getAllBookings();
            if (bookings.size() > 0) {
                for (Booking booking : bookings) {
                    bookingDtos.add(modelMapper.map(booking, BookingDtoDetails.class));
                }
            }
            return ResponseEntity.ok(bookingDtos);

        } catch (Exception e) {
            this.LOGGER.error("{}", e.getMessage());
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateBooking(@RequestBody Booking booking) {

        try {
            booking.setModifiedDate(new Date());
            var _booking = this.bookingService.createBooking(booking);
            return ResponseEntity.ok(_booking);
        } catch (Exception e) {

            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<?> getBookingByCustomer(@PathVariable("id") int customerId) {
        List<BookingDtoDetails> BookingDtoDetailsList = new ArrayList<>();
        try {
            Customer customer = this.customerService.getCustomerById(customerId);

            if (customer != null) {
                this.LOGGER.info("{}", customer.getFullName());
                List<Booking> bookings = this.bookingService.getBookingsByCustomer(customer);
                // bookings.forEach(x -> {
                // });
                for (var booking : bookings) {
                    BookingDtoDetails bookingDto = new BookingDtoDetails();

                    bookingDto = this.modelMapper.map(booking, BookingDtoDetails.class);
                    // bookingDto.setVehicleModels(this.modelMapper.map(booking.getVehicleModels().));
                    BookingDtoDetailsList.add(bookingDto);
                }
                return ResponseEntity.ok(BookingDtoDetailsList);
            } else {
                throw new Exception("User not found");
                // return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }
}
