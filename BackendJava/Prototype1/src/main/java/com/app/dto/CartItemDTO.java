package com.app.dto;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CartItemDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	@NotNull
	private double unit_price;
	
	@NotNull
	private int quantity;
	
	@NotNull
	private double discount;
	
	@NotNull
	private double totalAmount;
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long customerId;
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long dishId;
	
}
