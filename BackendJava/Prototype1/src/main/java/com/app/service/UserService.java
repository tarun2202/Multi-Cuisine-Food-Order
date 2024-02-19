package com.app.service;

import javax.validation.Valid;

import com.app.dto.ApiResponseDTO;
import com.app.dto.CustomerSignUpDTO;
import com.app.dto.VendorSignUpDTO;

public interface UserService {

	ApiResponseDTO customerRegistration(@Valid CustomerSignUpDTO dto);

	ApiResponseDTO vendorRegistration(@Valid VendorSignUpDTO dto);

}
