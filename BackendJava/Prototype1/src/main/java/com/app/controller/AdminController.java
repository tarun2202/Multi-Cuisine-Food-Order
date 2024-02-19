package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
@Validated
public class AdminController {
	
	@Autowired
	AdminService adminService;

	@GetMapping("/active/vendors")
	public ResponseEntity<?> getAllActiveVendors(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.getAllActiveVendors());
	}
	
	@GetMapping("/inactive/vendors")
	public ResponseEntity<?> getAllInactivateVendors(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.getAllInactiveVendors());
	}
	
	@PutMapping("/activate/{vendorId}")
	public ResponseEntity<?> approveVendor(@PathVariable Long vendorId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.approveVendor(vendorId));
	}
	
	@PutMapping("/inactivate/{vendorId}")
	public ResponseEntity<?> inactiveVendor(@PathVariable Long vendorId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.inactiveVendor(vendorId));
	}
	
	@GetMapping("/adminDashboard")
	public ResponseEntity<?> adminDashboard(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.adminDashboard());
	}
}

