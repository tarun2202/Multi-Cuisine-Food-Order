package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartItemDTO;
import com.app.service.CartItemService;

@RestController
@RequestMapping("/cartitems")
@CrossOrigin
@Validated
public class CartItemController {

	@Autowired
	private CartItemService cartItemService;
	
	//add cart item
	@PostMapping("/add/{customerId}/{dishId}")
	public ResponseEntity<?> addCartItem(@PathVariable Long customerId,@PathVariable Long dishId,@RequestBody CartItemDTO cartItemDetails){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(cartItemService.addCartItem(customerId,dishId,cartItemDetails));
	}
	
	//update cart item
	
	
	
	//delete cart item
	
	
}
