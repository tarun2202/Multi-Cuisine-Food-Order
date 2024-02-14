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
public class CustomerSignUpDTO {

	// Customer info

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;

	@NotBlank(message = "Name required")
	private String customerName;

	@Email(message = "Invalid Email!!!")
	private String customerEmail;

	@JsonProperty(access = Access.WRITE_ONLY)
	private String customerPassword;

	@Length(max = 10, message = "value cannot be more than 10 numbers")
	private String customerMobileNo;

}