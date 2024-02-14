package com.app.controller;

import javax.validation.constraints.NotNull;

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
	@PostMapping("/{customerId}/{dishId}")
	public ResponseEntity<?> addFavourite(@PathVariable @NotNull Long customerId, @PathVariable @NotNull Long dishId) {
		return ResponseEntity.status(HttpStatus.CREATED).body(favouriteService.addFavourite(customerId, dishId));
	}

	// remove favourite by customer
	@DeleteMapping("/{favouriteId}")
	public ResponseEntity<?> removeFavourite(@PathVariable @NotNull Long favouriteId) {
		return ResponseEntity.status(HttpStatus.OK).body(favouriteService.removeFavourite(favouriteId));
	}

	// get list of favourites for customer
	@GetMapping("/{customerId}")
	public ResponseEntity<?> getAllFavouritesByCustomerId(@PathVariable @NotNull Long customerId) {
		return ResponseEntity.status(HttpStatus.OK).body(favouriteService.getAllFavouritesByCustomerId(customerId));
	}

}
