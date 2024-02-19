package com.app.service;

import java.util.List;

import com.app.dto.ApiResponseDTO;
import com.app.dto.CustomerSignUpDTO;
import com.app.dto.CustomerUpdateDTO;
import com.app.dto.LoginDTO;
import com.app.dto.OrderDTO;
import com.app.entities.Customers;

public interface CustomerService {

	List<OrderDTO> getAllOrdersByCustomerId(Long customerId);
    
    Long validateAndLogin(LoginDTO cred);

	CustomerSignUpDTO getProfile(Long customerId);

	ApiResponseDTO updateProfile(Long customerId, CustomerUpdateDTO updateDto);

}
