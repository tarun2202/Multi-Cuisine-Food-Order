package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.OrderItemService;

@RestController
@RequestMapping("/orderitems")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class OrderItemController {

	@Autowired
	private OrderItemService orderItemService;
	
	
//	@GetMapping("/{customerId}")
	
	
	//add order item;
//	@PostMapping()
//	public ResponseEntity<?> addOrderItem(){
//		
//	}
	
	
}
