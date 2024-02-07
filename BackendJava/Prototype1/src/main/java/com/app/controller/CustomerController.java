package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.CustomerDao;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/customers")
@CrossOrigin
@Validated
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	public CustomerController() {
		System.out.println("In ctor of "+getClass());
	}
	
	// find all orders placed by customer
	// URL :- http://localhost:8080/dishes/
	// Method:- GET
	// Response:- List<DishDTO>,SC200
	@GetMapping("/orders/{customerId}")
	public ResponseEntity<?> getAllOrdersByCustomerId(@PathVariable Long customerId){
		return ResponseEntity.ok(customerService.getAllOrdersByCustomerId(customerId));
	}
}
