package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.app.dto.ApiResponseDTO;
import com.app.dto.DishDTO;
import com.app.entities.Dish;

public interface DishService {

	List<DishDTO> getAllDishes();

	List<DishDTO> getAllDishesByName(String dishName);

	ApiResponseDTO addDishDetails(Long vendorId, @Valid DishDTO dish);

	ApiResponseDTO deleteDishDetails(Long dishId, Long vendorId);

	List<DishDTO> getDishByVendorId(Long vendorId);

	DishDTO getDishById(Long dishId);

	ApiResponseDTO updateDish(Long dishId, DishDTO dishDto);
	
//	DishDTO getDishById(Long dishId);

}
