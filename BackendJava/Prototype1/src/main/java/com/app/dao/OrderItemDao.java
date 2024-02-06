package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.OrderItems;

public interface OrderItemDao extends JpaRepository<OrderItems, Long> {

}
