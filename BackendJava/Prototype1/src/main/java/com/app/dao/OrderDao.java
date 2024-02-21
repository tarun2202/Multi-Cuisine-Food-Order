package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Customers;
import com.app.entities.Orders;

public interface OrderDao extends JpaRepository<Orders, Long> {

	
	List<Orders> findByCustomer(Customers customer);
}
