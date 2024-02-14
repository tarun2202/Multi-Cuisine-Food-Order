package com.app.controller;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.CartItemService;
import com.app.service.CustomerService;
import com.app.service.OrderItemService;

@RestController
@RequestMapping("/orderitems")
@CrossOrigin
@Validated
public class OrderItemController {

	@Autowired
	private OrderItemService orderItemService;
	
//	@Autowired
//	private CustomerService customerService;
//	
//	@Autowired
//	private CartItemService cartItemService;
	
	//add order item;
	@PostMapping("/addallcartitems/{customerId}")
	public ResponseEntity<?> addOrderItem(@PathVariable @NotNull Long customerId){
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(orderItemService.addOrderItems(customerId));
	}
	
	
}
