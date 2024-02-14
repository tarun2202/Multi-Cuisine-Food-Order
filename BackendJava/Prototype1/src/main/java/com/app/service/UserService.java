package com.app.service;

import javax.validation.Valid;

import com.app.dto.CustomerSignUpDTO;
import com.app.dto.VendorSignUpDTO;

public interface UserService {

	CustomerSignUpDTO customerRegistration(@Valid CustomerSignUpDTO dto);

	VendorSignUpDTO vendorRegistration(@Valid VendorSignUpDTO dto);

}