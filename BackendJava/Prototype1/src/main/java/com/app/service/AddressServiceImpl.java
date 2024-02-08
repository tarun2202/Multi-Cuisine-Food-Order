package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AddressDao;
import com.app.dao.CustomerDao;
import com.app.dao.VendorDao;
import com.app.dto.AddressDTO;
import com.app.dto.ApiResponseDTO;
import com.app.entities.Address;
import com.app.entities.Customers;
import com.app.entities.Vendors;

@Service
@Transactional
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressDao addressDao;

	@Autowired
	private CustomerDao customerDao;

	@Autowired
	private VendorDao vendorDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponseDTO addCustomerAddress(Long customerId, AddressDTO addressDetails) {

		Customers customer = customerDao.getReferenceById(customerId);

		Address address = mapper.map(addressDetails, Address.class);

		address.setCustomer(customer);
		addressDao.save(address);

		return new ApiResponseDTO("Address added succesfully!");
	}

	@Override
	public ApiResponseDTO addVendorAddress(Long vendorId, AddressDTO addressDetails) {

		Vendors vendor = vendorDao.getReferenceById(vendorId);

		Address address = mapper.map(addressDetails, Address.class);

		address.setVendor(vendor);
		addressDao.save(address);

		return new ApiResponseDTO("Address added succesfully!");
	}

	@Override
	public List<AddressDTO> getCustomerAddress(Long customerId) {

		Customers customer = customerDao.getReferenceById(customerId);

		// return list of address dto from here
		List<Address> address = addressDao.getByCustomerId(customerId);

		return address.stream().map(add -> mapper.map(add, AddressDTO.class)).collect(Collectors.toList());
	}

	@Override
	public List<AddressDTO> getVendorAddress(Long vendorId) {

		Vendors vendor = vendorDao.getReferenceById(vendorId);
		// return list of address dto from here
		List<Address> address = addressDao.getByVendor(vendor);
		return address.stream().map(add -> mapper.map(add, AddressDTO.class)).collect(Collectors.toList());
	}

	@Override
	public List<AddressDTO> getVendorAddressByName(String vendorName) {
		Vendors vendor = vendorDao.getByVendorName(vendorName);

		List<Address> address = addressDao.getByVendor(vendor);

		return address.stream().map(add -> mapper.map(add, AddressDTO.class)).collect(Collectors.toList());

	}

	@Override
	public List<AddressDTO> getCustomerAddressByName(String customerName) {
		Customers customer = customerDao.getByCustomerName(customerName);

		List<Address> address = addressDao.getByCustomer(customer);

		return address.stream().map(add -> mapper.map(add, AddressDTO.class)).collect(Collectors.toList());

	}

}