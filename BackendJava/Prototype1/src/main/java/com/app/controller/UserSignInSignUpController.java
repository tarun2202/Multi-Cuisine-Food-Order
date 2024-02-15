package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponseDTO;
import com.app.dto.CustomerSignUpDTO;
import com.app.dto.SignInRequestDTO;
import com.app.dto.SignInResponseDTO;
import com.app.dto.VendorSignUpDTO;
import com.app.entities.UserRole;
import com.app.service.CustomUserDetailsService;
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
	private CustomUserDetailsService customUserDetailsService;

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
	@PostMapping("/cussignin")
	public ApiResponseDTO customerSignIn(@RequestBody @Valid SignInRequestDTO authReqDTO) {

		System.out.println("Customer Sign In");
		System.out.println(authReqDTO.toString());

		customUserDetailsService.setUserRole(UserRole.ROLE_CUSTOMER);

		Authentication authentication = authManager
				.authenticate(new UsernamePasswordAuthenticationToken(authReqDTO.getEmail(), authReqDTO.getPassword()));

		if (authentication.isAuthenticated()) {
			return new ApiResponseDTO(
					jwtService.generateToken(authReqDTO.getEmail(), UserRole.ROLE_CUSTOMER.toString()));
		} else {
			throw new UsernameNotFoundException("Invalid user!");
		}
	}

	@PostMapping("/vensignin")
	public ApiResponseDTO vendorSignIn(@RequestBody @Valid SignInRequestDTO authReqDTO) {

		System.out.println("Vendor Sign In");
		System.out.println(authReqDTO.toString());

		customUserDetailsService.setUserRole(UserRole.ROLE_VENDOR);

		Authentication authentication = authManager
				.authenticate(new UsernamePasswordAuthenticationToken(authReqDTO.getEmail(), authReqDTO.getPassword()));

		if (authentication.isAuthenticated()) {
			return new ApiResponseDTO(jwtService.generateToken(authReqDTO.getEmail(), UserRole.ROLE_VENDOR.toString()));
		} else {
			throw new UsernameNotFoundException("Invalid user!");
		}
	}

	@PostMapping("/admsignin")
	public ApiResponseDTO adminSignIn(@RequestBody @Valid SignInRequestDTO authReqDTO) {

		System.out.println("Admin Sign In");
		System.out.println(authReqDTO.toString());

		customUserDetailsService.setUserRole(UserRole.ROLE_ADMIN);

		Authentication authentication = authManager
				.authenticate(new UsernamePasswordAuthenticationToken(authReqDTO.getEmail(), authReqDTO.getPassword()));

		if (authentication.isAuthenticated()) {
			return new ApiResponseDTO(jwtService.generateToken(authReqDTO.getEmail(), UserRole.ROLE_ADMIN.toString()));
		} else {
			throw new UsernameNotFoundException("Invalid user!");
		}
	}

//	@PostMapping("/signin")
//	public ResponseEntity<?> customerSignIn(@RequestBody SignInRequestDTO authReqDTO) {
//		
//		org.springframework.security.core.Authentication authentication = authManager
//				.authenticate(new UsernamePasswordAuthenticationToken(authReqDTO.getEmail(), authReqDTO.getPassword()));
//		
//		if (authentication.isAuthenticated()) {
//			return ResponseEntity.ok(new SignInResponseDTO(jwtService.generateToken(authReqDTO.getEmail()),
//					"Authentication succesfull!"));
//		} else {
//			throw new UsernameNotFoundException("Invalid user!");
//		}
//	}

}
