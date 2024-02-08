package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Address;
import com.app.entities.Customers;
import com.app.entities.Vendors;

public interface AddressDao extends JpaRepository<Address, Long> {

	List<Address> getByCustomer(Customers customer);

	List<Address> getByVendor(Vendors vendor);

	List<Address> getByCustomerId(Long customerId);

}
