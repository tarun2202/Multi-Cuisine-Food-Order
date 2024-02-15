package com.app.service;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.app.entities.Admin;
import com.app.entities.Customers;
import com.app.entities.UserRole;
import com.app.entities.Vendors;

public class CustomUserDetails implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Customers customer;

	private Vendors vendor;

	private Admin admin;

	private UserRole userRole;

	public CustomUserDetails(Customers customer, UserRole userRole) {
		this.customer = customer;
		this.userRole = userRole;
	}

	public CustomUserDetails(Vendors vendor, UserRole userRole) {
		this.vendor = vendor;
		this.userRole = userRole;
	}

	public CustomUserDetails(Admin admin, UserRole userRole) {
		this.admin = admin;
		this.userRole = userRole;

	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

		if (userRole == UserRole.ROLE_CUSTOMER) {

			return List.of(new SimpleGrantedAuthority(customer.getUserRole().toString()));

		} else if (userRole == UserRole.ROLE_VENDOR) {

			return List.of(new SimpleGrantedAuthority(vendor.getUserRole().toString()));

		} else {

			return List.of(new SimpleGrantedAuthority(admin.getUserRole().toString()));

		}
	}

	@Override
	public String getPassword() {

		if (userRole == UserRole.ROLE_CUSTOMER) {

			return customer.getCustomerPassword();

		} else if (userRole == UserRole.ROLE_VENDOR) {

			return vendor.getVendorPassword();

		} else {

			return admin.getAdminPassword();

		}

	}

	@Override
	public String getUsername() {

		if (userRole == UserRole.ROLE_CUSTOMER) {

			return customer.getCustomerEmail();

		} else if (userRole == UserRole.ROLE_VENDOR) {

			return vendor.getVendorEmail();

		} else {

			return admin.getAdminEmail();

		}

	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
