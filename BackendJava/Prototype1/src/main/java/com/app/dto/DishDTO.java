package com.app.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

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
	@Length(max = 25)
	private String dishName;

	@NotBlank
	@Length(max = 255)
	private String description;

	@NotBlank
	@Length(max = 25)
	private FoodCategory category;

	@NotBlank
	@Length(max = 25)
	private CuisineType cuisine;

	@NotNull
	private int rating;

	@NotNull
	private double price;

	@NotNull
	private double discount;

	@NotBlank
	@Length(max = 255)
	private String dishImage;

	@JsonProperty(access = Access.READ_ONLY)
	private Long vendorId;

}
