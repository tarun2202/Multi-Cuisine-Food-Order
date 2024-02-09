package com.app.controller;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	public ResponseEntity<?> addCartItem(@PathVariable @NotNull Long customerId,@PathVariable @NotNull Long dishId,@RequestBody @Valid CartItemDTO cartItemDetails){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(cartItemService.addCartItem(customerId,dishId,cartItemDetails));
	}
	
	//update cart item
	@PutMapping("/update/{cartItemId}")
	public ResponseEntity<?> updateCartItem(@PathVariable @NotNull Long cartItemId,@RequestBody @Valid CartItemDTO cartItemDetails){
		return ResponseEntity.status(HttpStatus.OK)
				.body(cartItemService.updateCartItem(cartItemId,cartItemDetails));
	}
	
	//delete cart item
	@DeleteMapping("/delete/{cartItemId}")
	public ResponseEntity<?> deleteCartItem(@PathVariable @NotNull Long cartItemId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(cartItemService.deleteCartItem(cartItemId));
	}
	
}
