package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.app.dto.AdminDashboardDTO;
import com.app.dto.ApiResponseDTO;
import com.app.dto.VendorDTO;
import com.app.entities.Vendors;


public interface AdminService {

	List<VendorDTO> getAllActiveVendors();
	
	List<VendorDTO> getAllInactiveVendors();

	ApiResponseDTO approveVendor(Long vendorId);

	ApiResponseDTO inactiveVendor(Long vendorId);

	AdminDashboardDTO adminDashboard();

}
