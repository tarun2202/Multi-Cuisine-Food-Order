package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CartItem;
import com.app.entities.Customers;

public interface CartItemDao extends JpaRepository<CartItem,Long> {

	List<CartItem> getByCustomer(Customers customer);

}
