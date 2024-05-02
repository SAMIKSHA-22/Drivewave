package com.drivewave.API.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drivewave.API.entities.Customer;
import com.drivewave.API.respositories.BookingRepository;
import com.drivewave.API.respositories.CustomerRepository;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepo;
    @Autowired
    BookingRepository bookingRepo;

    public Customer createCustomer(Customer customer) throws Exception {
        if (customer != null) {
            return this.customerRepo.save(customer);
        } else {
            throw new Exception("Object is null");
        }
    }

    public Customer updateCustomer(Customer customer) throws Exception {
        if (customer != null) {
            return this.customerRepo.save(customer);
        } else {
            throw new Exception("Object is null");
        }
    }

    public List<Customer> getAllCustomer() {
        return this.customerRepo.findAll();
    }

    public Customer getCustomerById(int id) throws Exception {
        var customer = this.customerRepo.findById(id).get();
        if (customer != null) {
            // customer.setBookings(this.bookingRepo.findByCustomer(customer));
            return customer;
        } else {
            throw new Exception("User not found");
        }
    }

    public void deleteCustomerById(int id) {
        this.customerRepo.deleteById(id);
    }

}
