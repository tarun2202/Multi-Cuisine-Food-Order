package com.app.service;

import java.util.List;

import com.app.dto.OrderItemsDTO;

public interface OrderItemService {

	
	
	public List<OrderItemsDTO> getOrderItems(Long customerId);
}
