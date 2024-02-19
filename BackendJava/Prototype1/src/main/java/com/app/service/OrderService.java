package com.app.service;

import com.app.dto.ApiResponseDTO;
import com.app.dto.OrderDTO;

public interface OrderService {

	Long placeOrder(Long customerId, OrderDTO orderDetails);

}
