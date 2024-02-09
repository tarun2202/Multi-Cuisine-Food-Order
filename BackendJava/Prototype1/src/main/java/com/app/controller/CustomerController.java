package com.app.controller;

import static org.springframework.http.MediaType.IMAGE_GIF_VALUE;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

import java.io.IOException;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.service.CustomerService;
import com.app.service.ImageHandlingService;

@RestController
@RequestMapping("/customers")
@CrossOrigin
@Validated
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	@Autowired
	@Qualifier("image_db")
	private ImageHandlingService imageService;

	public CustomerController() {
		System.out.println("In ctor of " + getClass());
	}

	// find all orders placed by customer
	// URL :- http://localhost:8080/dishes/
	// Method:- GET
	// Response:- List<DishDTO>,SC200
	@GetMapping("/orders/{customerId}")
	public ResponseEntity<?> getAllOrdersByCustomerId(@PathVariable @NotNull Long customerId) {
		return ResponseEntity.ok(customerService.getAllOrdersByCustomerId(customerId));
	}

//  upload image from clnt n saving it either on db or in server side folder
	// http://host:port/employees/images/{empId} ,
	// method=POST , req param :
	// multipart file(image data)
	@PostMapping(value = "/images/{customerId}", consumes = "multipart/form-data") 
	public ResponseEntity<?> uploadImage(@PathVariable @NotNull Long customerId, @RequestParam MultipartFile imageFile)
			throws IOException {
		System.out.println("in upload img " + customerId);
		return ResponseEntity.status(HttpStatus.CREATED).body(imageService.uploadImage(customerId, imageFile));
	}

	// serve(download image) of specific emp
	// http://host:port/employees/images/{empId} , method=GET
	@GetMapping(value = "/images/{customerId}", produces = { IMAGE_GIF_VALUE, IMAGE_JPEG_VALUE, IMAGE_PNG_VALUE })
	public ResponseEntity<?> serveEmpImage(@PathVariable @NotNull Long customerId) throws IOException {
		System.out.println("in download img " + customerId);
		return ResponseEntity.ok(imageService.downloadImage(customerId));
	}
}
