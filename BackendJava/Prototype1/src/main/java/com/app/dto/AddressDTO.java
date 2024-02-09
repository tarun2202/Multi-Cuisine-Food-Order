package com.app.dto;

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
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;

	@NotBlank
	@Length(max = 100)
	private String street;

	@NotBlank
	@Length(max = 25)
	private String city;

	@NotBlank
	@Length(max = 25)
	private String state;

	@NotBlank
	@Length(max = 25)
	private String country;

	@NotBlank
	@Length(max = 6)
	private String pincode;

	@JsonProperty(access = Access.READ_ONLY)
	private Long customerId;

	@JsonProperty(access = Access.READ_ONLY)
	private Long vendorId;

}
