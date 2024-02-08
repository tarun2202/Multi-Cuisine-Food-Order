package com.app.dto;

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
	
	private double unit_price;
	
	private int quantity;
	
	private double discount;
	
	private double totalAmount;
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long customerId;
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long dishId;
	
}
