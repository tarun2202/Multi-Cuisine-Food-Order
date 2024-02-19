package com.app.service;

import java.util.List;

import com.app.dto.ApiResponseDTO;
import com.app.dto.FavouriteDTO;
import com.app.dto.FavouriteResponseDTO;

public interface FavouriteService {

	ApiResponseDTO addFavourite(Long customerId, Long dishId);

	ApiResponseDTO removeFavourite(Long favouriteId);

	List<FavouriteResponseDTO> getAllFavouritesByCustomerId(Long customerId);

}
