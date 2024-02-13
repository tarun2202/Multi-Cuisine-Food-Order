package com.app.service;

import java.util.List;

import com.app.dto.LoginDTO;
import com.app.dto.OrderDTO;
import com.app.entities.Customers;

public interface CustomerService {

	List<OrderDTO> getAllOrdersByCustomerId(Long customerId);
    
    Long validateAndLogin(LoginDTO cred);

}
