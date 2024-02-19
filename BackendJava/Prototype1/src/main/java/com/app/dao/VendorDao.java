package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Status;
import com.app.entities.Vendors;

public interface VendorDao extends JpaRepository<Vendors, Long> {

	Vendors getByVendorName(String vendorName);

	Optional<Vendors> findByVendorEmail(String vendorEmail);
	
	List<Vendors> findByVendorStatus(Status status);

}
