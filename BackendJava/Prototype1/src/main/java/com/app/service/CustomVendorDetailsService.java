package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.VendorDao;
import com.app.entities.Vendors;

@Service
@Transactional
public class CustomVendorDetailsService implements UserDetailsService {

	@Autowired
	private VendorDao vendorDao;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Vendors vendor = vendorDao.findByVendorEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("Email not found!"));
		return new CustomUserDetails(vendor);
	}

}