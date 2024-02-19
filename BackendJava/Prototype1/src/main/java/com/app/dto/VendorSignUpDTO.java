package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class VendorSignUpDTO {

	// Vendor info

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;

	@NotBlank(message = "Name required")
	private String vendorName;

	@Email(message = "Invalid Email!!!")
	private String vendorEmail;

	@JsonProperty(access = Access.WRITE_ONLY)
	private String vendorPassword;

	@Length(max = 10, message = "value cannot be more than 10 numbers")
	private String vendorMobileNo;
	
    private String street;
	
	private String city;
	
	private String state;
	
	private String country;
	
	private String pincode;
}
