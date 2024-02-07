package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerDao;
import com.app.dto.OrderDTO;
import com.app.entities.Customers;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerDao customerDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<OrderDTO> getAllOrdersByCustomerId(Long customerId) {
		Customers customer = customerDao.findById(customerId).orElseThrow();

		return customer.getOrderList().stream().map(orders -> mapper.map(orders, OrderDTO.class))
				.collect(Collectors.toList());

	}

}
