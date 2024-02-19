package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Admin;
import com.app.entities.Customers;

public interface AdminDao extends JpaRepository<Admin, Long> {

	Optional<Admin> findByAdminEmail(String email);

}
