package com.app.service;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AddressDao;
import com.app.dao.CustomerDao;
import com.app.dao.VendorDao;
import com.app.dto.ApiResponseDTO;
import com.app.dto.CustomerSignUpDTO;
import com.app.dto.VendorSignUpDTO;
import com.app.entities.Address;
import com.app.entities.Customers;
import com.app.entities.Status;
import com.app.entities.UserRole;
import com.app.entities.Vendors;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private CustomerDao customerDao;

	@Autowired
	private VendorDao vendorDao;
	
	@Autowired
	private AddressDao addressDao;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private PasswordEncoder encoder;

	@Override
	public ApiResponseDTO customerRegistration(@Valid CustomerSignUpDTO dto) {

		Customers customer=new Customers();
        
		customer.setCustomerName(dto.getCustomerName());
		
		customer.setCustomerEmail(dto.getCustomerEmail());
		
		customer.setCustomerMobileNo(dto.getCustomerMobileNo());

		customer.setCustomerPassword(encoder.encode(dto.getCustomerPassword()));
		
		customer.setImage(null);

		customer.setCustomerStatus(Status.ACTIVE);

		customer.setUserRole(UserRole.ROLE_CUSTOMER);
		
		customerDao.save(customer);
		
		
		
//		Long customerId = customer.getId();		
		Address address = new Address();
		
		address.setStreet(dto.getStreet());
		address.setCity(dto.getCity());
		address.setState(dto.getState());
		address.setCountry(dto.getCountry());
		address.setPincode(dto.getPincode());
		address.setCustomer(customer);
         
		addressDao.save(address);
		
		return new ApiResponseDTO("Registration Successfull");
	}

	@Override
	public ApiResponseDTO vendorRegistration(@Valid VendorSignUpDTO dto) {

		Vendors vendor = mapper.map(dto, Vendors.class);

		vendor.setRatings(0);

		vendor.setUserRole(UserRole.ROLE_VENDOR);

		vendor.setVendorStatus(Status.INACTIVE);

		System.out.println(vendor.toString());

		vendor.setVendorPassword(encoder.encode(vendor.getVendorPassword()));
		
		vendorDao.save(vendor);

		return new ApiResponseDTO("Registration Successfull");
	}

}
