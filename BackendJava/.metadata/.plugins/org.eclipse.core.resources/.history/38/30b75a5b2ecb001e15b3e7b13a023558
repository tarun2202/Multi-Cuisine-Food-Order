package com.app.controller;

import javax.validation.Valid;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SignInRequestDTO;
import com.app.dto.SignInResponseDTO;
import com.app.dto.VendorSignUpDTO;
import com.app.dto.CustomerSignUpDTO;
import com.app.service.JwtService;
import com.app.service.UserService;

@RestController
@RequestMapping(value = { "/customers", "/vendors", "/admins" })
@CrossOrigin
@Validated
public class UserSignInSignUpController {// userSignInController

	@Autowired
	private JwtService jwtService;

	@Autowired
	private UserService userService;

	@Autowired
	private AuthenticationManager authManager;

	// sign up of customer
	@PostMapping("/customersignup")
	public ResponseEntity<?> customerSignup(@RequestBody @Valid CustomerSignUpDTO dto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.customerRegistration(dto));
	}

	// sign up of vendor
	@PostMapping("/vendorsignup")
	public ResponseEntity<?> vendorSignup(@RequestBody @Valid VendorSignUpDTO dto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.vendorRegistration(dto));
	}

	// eq to signIn user
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateAndGetToken(@RequestBody SignInRequestDTO authReqDTO) {

		org.springframework.security.core.Authentication authentication = authManager
				.authenticate(new UsernamePasswordAuthenticationToken(authReqDTO.getEmail(), authReqDTO.getPassword()));

		if (authentication.isAuthenticated()) {
			return ResponseEntity.ok(new SignInResponseDTO(jwtService.generateToken(authReqDTO.getEmail()),
					"Authentication succesfull!"));
		} else {
			throw new UsernameNotFoundException("Invalid user!");
		}
	}

}
