package com.app.service;

import java.util.List;

import com.app.dto.AddressDTO;
import com.app.dto.ApiResponseDTO;

public interface AddressService {

	ApiResponseDTO addCustomerAddress(Long customerId,  AddressDTO addressDetails);

	ApiResponseDTO addVendorAddress(Long vendorId,  AddressDTO addressDetails);

	List<AddressDTO> getCustomerAddress(Long customerId);

	List<AddressDTO> getVendorAddress(Long vendorId);

	List<AddressDTO> getVendorAddressByName(String vendorName);

	List<AddressDTO> getCustomerAddressByName(String customerName);

}
