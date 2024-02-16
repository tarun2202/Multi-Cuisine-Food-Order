package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminDao;
import com.app.dao.CustomerDao;
import com.app.dao.VendorDao;
import com.app.entities.Admin;
import com.app.entities.Customers;
import com.app.entities.UserRole;
import com.app.entities.Vendors;

@Service
@Transactional
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private CustomerDao customerDao;

	@Autowired
	private VendorDao vendorDao;

	private UserRole userRole;

	@Autowired
	private AdminDao adminDao;

	public UserRole getUserRole() {
		return userRole;
	}

	public void setUserRole(UserRole userRole) {
		this.userRole = userRole;
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		if (userRole == UserRole.ROLE_CUSTOMER) {

			Customers customer = customerDao.findByCustomerEmail(email)
					.orElseThrow(() -> new UsernameNotFoundException("Email not found!"));
			return new CustomUserDetails(customer,userRole);
			
		} else if (userRole == UserRole.ROLE_VENDOR) {

			Vendors vendor = vendorDao.findByVendorEmail(email)
					.orElseThrow(() -> new UsernameNotFoundException("Email not found!"));
			return new CustomUserDetails(vendor,userRole);

		} else if (userRole == UserRole.ROLE_ADMIN) {
			Admin admin = adminDao.findByAdminEmail(email)
					.orElseThrow(() -> new UsernameNotFoundException("Email not found!"));
			return new CustomUserDetails(admin,userRole);

		}
		return null;
	}

}