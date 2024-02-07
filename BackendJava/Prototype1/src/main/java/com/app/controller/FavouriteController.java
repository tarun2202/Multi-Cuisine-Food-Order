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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.FavouriteService;

@RestController
@Validated
@CrossOrigin
@RequestMapping("/favourites")
public class FavouriteController {

	@Autowired
	private FavouriteService favouriteService;

	// add favourite by customer
	@PostMapping("/add/{customerId}/{dishId}")
	public ResponseEntity<?> addFavourite(@PathVariable Long customerId, @PathVariable Long dishId) {
		return ResponseEntity.status(HttpStatus.CREATED).body(favouriteService.addFavourite(customerId, dishId));
	}

	// remove favourite by customer
	@DeleteMapping("/delete/{favouriteId}")
	public ResponseEntity<?> removeFavourite(@PathVariable Long favouriteId) {
		return ResponseEntity.status(HttpStatus.OK).body(favouriteService.removeFavourite(favouriteId));
	}

	//get list of favourites for customer
	@GetMapping("/get/{customerId}")
	public ResponseEntity<?> getAllFavouritesByCustomerId(@PathVariable Long customerId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(favouriteService.getAllFavouritesByCustomerId(customerId));
	}
	
}
