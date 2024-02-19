package com.app.dto;

import javax.validation.constraints.NotBlank;

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
	

	public CartItemDTO(Long id, double unit_price, int quantity, double discount, double totalAmount, Long customerId,
			Long dishId, @NotBlank String dishName, String dishImage) {
		super();
		this.id = id;
		this.unit_price = unit_price;
		this.quantity = quantity;
		this.discount = discount;
		this.totalAmount = totalAmount;
		this.customerId = customerId;
		this.dishId = dishId;
	}
	
	
	
}
