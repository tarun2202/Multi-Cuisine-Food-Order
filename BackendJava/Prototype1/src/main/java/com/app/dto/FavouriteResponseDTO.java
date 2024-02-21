package com.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class FavouriteResponseDTO {
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
  
	private String dishName;
	
	private String dishImage;
	
	private double unit_price;
	
	private double discount;
	
	private String vendorName;
	
	private String cuisine;
	
	private String category;
	
	private String description;

	public FavouriteResponseDTO(Long id, String dishName, String dishImage, double unit_price, double discount,
			String vendorName, String cuisine, String category, String description) {
		super();
		this.id = id;
		this.dishName = dishName;
		this.dishImage = dishImage;
		this.unit_price = unit_price;
		this.discount = discount;
		this.vendorName = vendorName;
		this.cuisine = cuisine;
		this.category = category;
		this.description = description;
	}


}
