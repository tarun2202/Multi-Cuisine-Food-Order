package com.app.service;

import com.app.dto.ApiResponseDTO;
import com.app.dto.CartItemDTO;

public interface CartItemService {

	ApiResponseDTO addCartItem(Long customerId, Long dishId, CartItemDTO cartItemDetails);

}
