package com.drivewave.API.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drivewave.API.entities.Booking;
import com.drivewave.API.entities.Customer;
import com.drivewave.API.respositories.BookingRepository;

@Service
public class BookingService {
    @Autowired
    BookingRepository bookingRepo;

    public Booking createBooking(Booking booking) throws Exception {

        if (booking != null) {
            return this.bookingRepo.save(booking);
        } else {
            throw new Exception("Object is null");
        }
    }

    public Booking updateBooking(Booking booking) throws Exception {
        if (booking != null) {
            return this.bookingRepo.save(booking);
        } else {
            throw new Exception("Object is null");
        }
    }

    public List<Booking> getAllBookings() {
        return this.bookingRepo.findAll();
    }

    public Booking getBookingById(int id) throws Exception {
        var booking = this.bookingRepo.findById(id).get();
        if (booking != null) {
            return booking;
        } else {
            throw new Exception("User not found");
        }
    }

    public List<Booking> getBookingsByCustomer(Customer customer) throws Exception {
        var bookings = this.bookingRepo.findByCustomer(customer);
        if (bookings != null) {
            return bookings;
        } else {
            throw new Exception("No bookings are available");
        }
    }

    public void deleteBookingById(int id) {
        this.bookingRepo.deleteById(id);
    }

}
