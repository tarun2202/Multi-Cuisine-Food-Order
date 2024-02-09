package com.app.controller;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ReviewDTO;
import com.app.service.ReviewService;

@RestController
@Validated
@CrossOrigin
@RequestMapping("/reviews")
public class ReviewController {

	@Autowired
	private ReviewService reviewService;
	
	
	//add review
	@PostMapping("/add/{customerId}/{dishId}")
	public ResponseEntity<?> addReview(@PathVariable @NotNull Long customerId,@PathVariable @NotNull Long dishId,@RequestBody @Valid ReviewDTO reviewDetails){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(reviewService.addReview(customerId,dishId,reviewDetails));
	}
	
	//get review
	@GetMapping
	public ResponseEntity<?> getAllReviews(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(reviewService.getAllReviews());
	}
	
	//get review by customer id
	@GetMapping("/customer/{customerId}")
	public ResponseEntity<?> getAllReviewsOfCustomer(@PathVariable @NotNull Long customerId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(reviewService.getAllReviewsOfCustomer(customerId));
	}
	
	//get review of specific dish
	@GetMapping("/{dishId}")
	public ResponseEntity<?> getReviewByDish(@PathVariable @NotNull Long dishId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(reviewService.getReviewByDish(dishId));
	}
	
	//delete review if required
	
}
