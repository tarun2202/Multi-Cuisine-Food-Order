package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
@CrossOrigin("*")
@Validated
public class CartItemController {

	@Autowired
	private CartItemService cartItemService;
	
	//add cart item
	@PostMapping("/{customerId}/{dishId}")
	public ResponseEntity<?> addCartItem(@PathVariable Long customerId,@PathVariable Long dishId,@RequestBody CartItemDTO cartItemDetails){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(cartItemService.addCartItem(customerId,dishId,cartItemDetails));
	}
	
	
	@GetMapping("/CartItems/{customerId}")
	public ResponseEntity<?> getCartItem(@PathVariable Long customerId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(cartItemService.getCartItem(customerId));
	}
	
	//update cart item
	@PutMapping("/increase/{cartItemId}")
	public ResponseEntity<?> increaseQuantity(@PathVariable Long cartItemId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(cartItemService.increaseQuantity(cartItemId));
	}
	
	@PutMapping("/decrease/{cartItemId}")
	public ResponseEntity<?> decreaseQuantity(@PathVariable Long cartItemId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(cartItemService.decreaseQuantity(cartItemId));
	}
	
	//delete cart item
	@DeleteMapping("/{customerId}")
	public ResponseEntity<?> deleteCartItem(@PathVariable Long customerId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(cartItemService.deleteCartItem(customerId));
	}
	
	
}
