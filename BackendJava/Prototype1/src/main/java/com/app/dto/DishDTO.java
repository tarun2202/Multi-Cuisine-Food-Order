package com.app.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.app.entities.CuisineType;
import com.app.entities.FoodCategory;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DishDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;

	@NotBlank
	private String dishName;

	@NotBlank
	private String description;

	private FoodCategory category;

	private CuisineType cuisine;

	@NotNull
	private int rating;

	@NotNull
	private double price;

	@NotNull
	private double discount;

	@NotBlank
	private String dishImage;

	@JsonProperty(access = Access.READ_ONLY)
	private Long vendorId;

}
