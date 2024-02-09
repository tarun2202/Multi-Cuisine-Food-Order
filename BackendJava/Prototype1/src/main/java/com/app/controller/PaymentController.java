package com.app.controller;

import javax.validation.constraints.NotBlank;
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

import com.app.entities.PaymentMethod;
import com.app.service.PaymentService;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/payments")
public class PaymentController {

	@Autowired
	private PaymentService paymentService;
	
	//add payment details in db
	@PostMapping("/add/{paymentMethod}/{orderId}")
	public ResponseEntity<?> addPaymentDetails(@PathVariable @NotBlank PaymentMethod paymentMethod,@PathVariable @NotNull Long orderId){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(paymentService.addPaymentDetails(paymentMethod,orderId));
	}
	
}
