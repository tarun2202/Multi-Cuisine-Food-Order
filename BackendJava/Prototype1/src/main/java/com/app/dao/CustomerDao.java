package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Customers;

public interface CustomerDao extends JpaRepository<Customers,Long> {

	Customers getByCustomerName(String customerName);

	Optional<Customers> findByCustomerEmail(String email);

}
