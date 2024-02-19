package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CustomerUpdateDTO {

	
	@NotBlank(message = "Name required")
	private String customerName;

	@Email(message = "Invalid Email!!!")
	private String customerEmail;

	@Length(max = 10, message = "value cannot be more than 10 numbers")
	private String customerMobileNo;
	
	private String street;
	
	private String city;
	
	private String state;
	
	private String country;
	
	private String pincode;
}
