package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OrderDTO;
import com.app.service.OrderService;

@RestController
@RequestMapping("/orders")
@CrossOrigin
@Validated
public class OrderController {

	@Autowired
	private OrderService orderService;

	// add order/place order
	// URL :- http://localhost:8080/dishes/
	// Method:- POST
	// Response:- msg,SC201
	@PostMapping("/{customerId}")
	public ResponseEntity<?> addOrder(@PathVariable Long customerId,@RequestBody @Valid OrderDTO orderDetails){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(orderService.placeOrder(customerId,orderDetails));
	}

}
