package com.app.dto;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AddressDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;

	@NotBlank
	private String street;

	@NotBlank
	private String city;

	@NotBlank
	private String state;

	@NotBlank
	private String country;

	@NotBlank
	@Length(max = 6)
	private String pincode;

	@JsonProperty(access = Access.READ_ONLY)
	private Long customerId;

	@JsonProperty(access = Access.READ_ONLY)
	private Long vendorId;

}
