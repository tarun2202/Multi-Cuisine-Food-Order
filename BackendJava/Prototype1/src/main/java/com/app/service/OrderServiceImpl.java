package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerDao;
import com.app.dao.OrderDao;
import com.app.dto.ApiResponseDTO;
import com.app.dto.OrderDTO;
import com.app.entities.Customers;
import com.app.entities.Orders;


@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderDao orderDao;

	@Autowired
	private CustomerDao customerDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponseDTO placeOrder(Long customerId, OrderDTO orderDetails) {
		
		Customers customer = customerDao.findById(customerId).orElseThrow();

		customer.addOrder(mapper.map(orderDetails, Orders.class));

		return new ApiResponseDTO("Order placed succesfully!");
	}

}
