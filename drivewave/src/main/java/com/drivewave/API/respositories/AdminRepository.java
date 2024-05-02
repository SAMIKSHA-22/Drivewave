package com.drivewave.API.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.drivewave.API.entities.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {

    public Admin findByEmail(String email);

    public Admin findByEmailAndPassword(String email, String password);
}
