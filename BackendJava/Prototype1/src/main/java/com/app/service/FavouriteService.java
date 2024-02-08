package com.app.service;

import java.util.List;

import com.app.dto.ApiResponseDTO;
import com.app.dto.FavouriteDTO;

public interface FavouriteService {

	ApiResponseDTO addFavourite(Long customerId, Long dishId);

	ApiResponseDTO removeFavourite(Long favouriteId);

	List<FavouriteDTO> getAllFavouritesByCustomerId(Long customerId);

}