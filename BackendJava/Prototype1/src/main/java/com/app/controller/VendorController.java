package com.app.controller;

import javax.validation.constraints.NotBlank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.VendorService;

@RestController
@RequestMapping("/vendors")
public class VendorController {

	@Autowired
	private VendorService vendorService;

	public VendorController() {
		System.out.println("In ctor of " + getClass());
	}

	// find all dishes by Vendor
	// URL :- http://localhost:8080/dishes/
	// Method:- GET
	// Response:- List<DishDTO>,SC200
	@GetMapping("/{vendorName}")
	public ResponseEntity<?> getAllDishesByVendor(@PathVariable @NotBlank String vendorName){
		return ResponseEntity.status(HttpStatus.OK)
				.body(vendorService.getAllDishesByVendor(vendorName));
	}
}
